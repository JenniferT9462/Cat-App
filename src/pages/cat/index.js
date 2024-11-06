// src/pages/cat/index.js
// import catData from '/cat-data.json';
import Header from '../../components/Header';
import CatImage from '../../components/CatImage';
import CatDetails from '../../components/CatDetails';
import CatLike from '../../components/CatLike';
import { useEffect, useState } from 'react'; //Add use to import from React


// const url = "https://cats-cats-cats-demo.deno.dev/cats/siamese";
const url = "/api/cat" //Changed url to new API route

export default function Cat() {
    //Step 3: Set cat data with useState instead of hardcoded data
    const [cat, setCat] = useState({});
    //Define searchTerm...Represent the state in memory using useState
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    //Step 1: Put a function INSIDE your component that fetches
    async function fetchCat() {
        if (!searchTerm) return; //Only fetch if searchTerm is present

        try {
             //Add searchTerm to url
            const result = await fetch(url + `?name=${searchTerm}`);
            if (!result.ok) throw new Error("Failed to fetch cat data");

            const data = await result.json();
            console.log(data);
            //Step 4: Use setCat to set the value of the cat variable.
            setCat(data);
            setError(null); //Reset error if successful
        } catch (err) {
            console.error(err);
            setError("Could not find cat. Try a different name.");
        }
    }

    //Run once on start with second args []
    useEffect(() => {
        //Step 2: Run our async fetch here.
        fetchCat();
    }, []); //Only runs once

    //Function to handle search term change
    function handleSearchTermChange(event) {
        // console.log(env);
        // const s = env.target.value;
        // console.log(s);
        // setSearchTerm(s);
        setSearchTerm(event.target.value)
    }
    //Connecting event handlers to set the state
    function handleSubmit(event) {
        event.preventDefault();
        fetchCat();
    }
    
    return (
        <div className='bg-amber-100'>
            <Header />
            <CatImage 
                name={cat.name}
                image={cat.image} />
                
            <div className='text-black'>
                <h4>Cat Form</h4>
                <p>Let us search for {searchTerm}</p>
                <form onSubmit={handleSubmit}> 
                    <label>
                        Kind of cat to search for:
                        {/* Controlled Component */}
                        <input 
                            className='border-2 border-red-500' 
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                        />
                    </label>
                    <button className='rounded-md border-2 bg-blue-500'
                            type="submit">
                            Search for your dream cat
                    </button>
                </form>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
            <CatDetails 
                origin={cat.origin}
                length={cat.length}
                children_friendly={cat.children_friendly}
                playfulness={cat.playfulness}
                other_pets_friendly={cat.other_pets_friendly} />
            <CatLike />
            
        </div>
    );

  }


// console.log(catData);