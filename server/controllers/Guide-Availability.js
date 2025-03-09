import GuideProfile from "../models/GuideProfile.js";

export const addAvailability = async (req, res) => {
    try {
        const { guideId, availability } = req.body; // Array of dates with slots

        let guideProfile = await GuideProfile.findOne({ guideId });

        if (!guideProfile) {
            return res.status(404).json({ message: "Guide profile not found" });
        }

        // Merge new availability into existing availability
        availability.forEach(newEntry => {
            const existingDateIndex = guideProfile.availability.findIndex(
                entry => entry.date.toISOString().split("T")[0] === newEntry.date.split("T")[0]
            );

            if (existingDateIndex > -1) {
                // If date exists, merge time slots
                guideProfile.availability[existingDateIndex].slots.push(...newEntry.slots);
            } else {
                // Add new date entry
                guideProfile.availability.push(newEntry);
            }
        });

        await guideProfile.save();
        res.status(200).json({ message: "Availability updated successfully", guideProfile });
    } catch (error) {
        res.status(500).json({ message: "Error updating availability", error });
    }
};

/*Frontend integration:
    Tourist Booking Page (Showing Available Guides)
    Tourist selects a date & time.
    Call getAvailableGuides API to display available guides.
    After selecting a guide, call bookSlot API to confirm.
*/
export const getAvailableGuides = async (req, res) => {
    try {
        const { date, startTime } = req.query;

        if (!date || !startTime) {
            return res.status(400).json({ message: "Date and start time are required" });
        }

        const availableGuides = await GuideProfile.find({
            availability: {
                $elemMatch: {
                    date: new Date(date),
                    "slots.startTime": startTime,
                    "slots.isBooked": false
                }
            }
        }).populate("guideId", "name profilePicture location");

        res.status(200).json(availableGuides);
    } catch (error) {
        res.status(500).json({ message: "Error fetching available guides", error });
    }
};

