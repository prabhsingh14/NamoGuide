import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const GuidePage = () => {
    const [searchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const date = searchParams.get("date");
    const [guides, setGuides] = useState([]);

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
        <div>
            <h1 className='text-black text-center'>Guide book kro!</h1>
        </div>
    );
}

export default GuidePage;