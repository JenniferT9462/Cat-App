// src/pages/cat/index.js
import catData from '/cat-data.json';
import Header from './Header';
import CatImage from './CatImage';
import CatDetails from './CatDetails';
import CatLike from './CatLike';
import { useEffect, useState } from 'react';

export default function Cat() {
    //Step 1: Put a function INSIDE your component that fetches
    async function fetchCat() {
        const url = "https://cats-cats-cats-demo.deno.dev/cats/siamese";
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
    }
    //Step 2: Run our async fetch here.
    fetchCat();
    return (
        <div className='bg-amber-100'>
            <Header />
            <CatImage 
                name={catData.name}
                image_link={catData.image_link} />
            <CatDetails 
                origin={catData.origin}
                length={catData.length}
                children_friendly={catData.children_friendly}
                playfulness={catData.playfulness}
                other_pets_friendly={catData.other_pets_friendly} />
            <CatLike />
        </div>
    )

  }


console.log(catData);