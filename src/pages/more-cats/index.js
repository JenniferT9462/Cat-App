import { useEffect, useState } from "react";
import CatCard from "./CatCard";

export default function MoreCats() {
    const [moreCats, setCats] = useState([]);

    async function fetchCats() {
        const url = "https://cats-cats-cats-demo.deno.dev/cats/co?multi_cat=true"
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setCats(data);
    }
     //Run once on start with second args []
     useEffect(() => {
        //Step 2: Run our async fetch here.
        fetchCats();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
        {moreCats.map((cat, index) => (
        <div className="flex" key={index}>
            <CatCard name={cat.name} image={cat.image_link} origin={cat.origin} />
        </div>
    ))}
  </div>
    );

}