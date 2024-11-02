import { useEffect, useState } from "react";
import CatCard from "./CatCard";
import CatsHeader from "./CatsHeader";


export default function MoreCats() {
    const [moreCats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track error state
    
    async function fetchCats() {

        const url = "https://cats-cats-cats-demo.deno.dev/cats/co?multi_cat=true"
        // const url = "/api/cats"
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setCats(data);

        setIsLoading(true); // Set loading state to true before fetching
        setError(null); // Clear any previous errors


        try {
            const url = "https://cats-cats-cats-demo.deno.dev/cats/co?multi_cat=true";
            const result = await fetch(url);

            if(!result.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await result.json();
            console.log(data);
            setCats(data);
        } catch (error) {
            setError(error.message); // Set error message
        } finally {
            setIsLoading(false); // Set loading state to false after fetching (regardless of success or failure)
        }

    }
     //Run once on start with second args []
     useEffect(() => {
        //Step 2: Run our async fetch here.
        fetchCats();
    }, []); // Run fetchCats on component mount

    return (
        <div className='bg-amber-100'>
            <CatsHeader/>
          <h1 className="text-4xl text-center text-amber-600">Look at All These Cats!</h1>

          {isLoading ? (
            <div className="loading-message">Fetching cats...</div> // Display loading message
          ) : error ? (
            <div className="error-message">Error: {error}</div> // Display error message
          ) : (
            <div className="grid grid-cols-2 gap-4">
                {moreCats.map((cat, index) => (
                <div className="flex" key={index}>
                    <CatCard name={cat.name} image={cat.image_link} origin={cat.origin} />
                </div>
            ))}
            </div>
         )}
        </div>
    );
}