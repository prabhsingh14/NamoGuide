import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from "react-helmet";
const GuidePage = () => {
    const [searchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const date = searchParams.get("date");
    const [guides, setGuides] = useState([]);
    <Helmet>
                <meta
                    name="description"
                    content="This Page has been designed to request to /api/guides with given destination and date to get a list of guides available for booking. "
                />
                <title>GuidePage- NamoGuide</title> {/* Optional: Add a title for the page */}
            </Helmet>

    useEffect(() => {
        const fetchGuides = async () => {
            try {
                const response = await fetch(`/api/guides?destination=${destination}&date=${date}`);
                const data = await response.json();
                setGuides(data);
            } catch (error) {
                console.error("Error fetching guides: ", error);
            }
        };

        if (destination && date) fetchGuides();
    }, [destination, date]);

    return (
        <div className="px-10 py-10 
            lg:px-8 md:px-6 sm:px-4 
            [@media(max-width:425px)]:px-3 [@media(max-width:320px)]:px-2">
            
            <h1 className="text-black text-center text-3xl font-bold 
                lg:text-2xl md:text-xl sm:text-lg 
                [@media(max-width:425px)]:text-base [@media(max-width:320px)]:text-sm">
                Guide book kro!
            </h1>
        </div>
    );
}

export default GuidePage;
