import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    async function fetchPokemon() {
        try {
            const response = await fetch('/api/pokemon');
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.log('Error fetching Pokemon Data:', error);
        }
    }
    useEffect(() => {
        fetchPokemon(); 
    }, []);

    if(!pokemonData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Pokemon Data</h1>
            <p>Name: {pokemonData.pokemonName}</p>
            <Image 
                src={pokemonData.pokemonImgSrc} 
                alt={pokemonData.pokemonName} 
                width={300}
                height={300}
            />
        </div>
    );
}