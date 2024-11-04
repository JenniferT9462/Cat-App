import { useEffect, useState } from "react";
import CatCard from "../../components/CatCard";
import Header from "../../components/Header";


export default function MoreCats() {
    const [moreCats, setCats] = useState([]);
    // const [isLoading, setIsLoading] = useState(false); // Track loading state
    // const [error, setError] = useState(null); // Track error state
    
    //Multi-cat URL
    // const url = "https://cats-cats-cats-demo.deno.dev/cats/co?multi_cat=true"

    //New url endpoint from more-cats API route
    const url = "/api/more-cats";

    async function fetchCats() {
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setCats(data);
        } catch (error) {
           console.error('Error fetching multiple cats!')
        } 
    }
        //Run once on start with second args []
        useEffect(() => {
            //Step 2: Run our async fetch here.
            fetchCats();
        }, []); // Run fetchCats on component mount

        if(!moreCats){
            return <div>Loading...</div>
        }

        return (
            <div className='bg-amber-100'>
                <Header/>
                <h1 className="text-4xl text-center text-amber-600">Look at All These Cats!</h1>
                <div className="grid grid-cols-2 gap-4">
                    {moreCats.map((cat, index) => (
                        <div className="flex" key={index}>
                            <CatCard name={cat.name} image={cat.image} origin={cat.origin} />
                        </div>
                    ))}
                </div>
            </div>
        );
}