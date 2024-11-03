// src/pages/cat/index.js
// import catData from '/cat-data.json';
import Header from '../../components/Header';
import CatImage from '../../components/CatImage';
import CatDetails from '../../components/CatDetails';
import CatLike from '../../components/CatLike';
import { useEffect, useState } from 'react';

export default function Cat() {
    //Step 3: Set cat data with useState instead of hardcoded data
    const [cat, setCat] = useState({});
    //Step 1: Put a function INSIDE your component that fetches
    async function fetchCat() {
        // const url = "https://cats-cats-cats-demo.deno.dev/cats/siamese";
        const url = "/api/cats"
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        //Step 4: Use setCat to set the value of the cat variable.
        setCat(data);
    }
    //Run once on start with second args []
    useEffect(() => {
        //Step 2: Run our async fetch here.
        fetchCat();
    }, []);
    
    return (
        <div className='bg-amber-100'>
            <Header />
            <CatImage 
                name={cat.name}
                image_link={cat.img} />
            <CatDetails 
                origin={cat.origin}
                length={cat.length}
                children_friendly={cat.children_friendly}
                playfulness={cat.playfulness}
                other_pets_friendly={cat.other_pets_friendly} />
            <CatLike />
        </div>
    )

  }


// console.log(catData);