import axios from "axios";

async function verifyLicenseWithDigiLockerXML(fileURL, digiLockerAccessToken){
    try {
        const response = await axios.get(
            // DigiLocker XML API URL -- Pending

            {
                headers: {
                    'Authorization': `Bearer ${digiLockerAccessToken}`,
                }
            }
        );

        if (response.status !== 200) {
            //Need to parse XML library here, build a function for it and store the data
        } else{
            console.error("DigiLocker XML API returned an error:", response.status, response.statusText);
            return { success: false, error: `DigiLocker XML API Error: ${response.status} ${response.statusText}` };
        }
    } catch (error) {
        console.error("Error during DigiLocker XML API call:", error);
        return { success: false, error: `DigiLocker XML API call failed: ${error.message}` };
    }
}

async function verifyLicenseWithDigiLockerFile(){
    try {
        const response = await axios.get(
            // DigiLocker File API URL -- Pending

            {
                headers: {
                    'Authorization': `Bearer ${digiLockerAccessToken}`,
                },

                responseType: 'arraybuffer', //to handle binary file data
            }
        );

        if(response.status == 200){
            // parsing pending
        } else{
            console.error("DigiLocker File API returned an error:", response.status, response.statusText);
            return { success: false, error: `DigiLocker File API Error: ${response.status} ${response.statusText}` };
        }
    } catch (error) {
        console.error("Error during DigiLocker File API call:", error);
        return { success: false, error: `DigiLocker File API call failed: ${error.message}` };
    }
}

// Todo: Parsing functions