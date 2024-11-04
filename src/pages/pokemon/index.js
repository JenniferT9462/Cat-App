import { useEffect, useState } from 'react';
import Image from "next/image";
import Header from '@/components/Header';

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
        <div className='bg-amber-100 h-screen'>
            <Header/>
            <h1 className='text-4xl text-blue-600 text-center mt-10'>Get Pokémon!</h1>
            <div className="bg-white shadow-md rounded-md p-6 w-96 mx-auto text-blue-500 border-4 border-blue-200">
                <h1 className='text-2xl'>Pokemon Data</h1>
                <p className='text-xl'>Name: {pokemonData.pokemonName}</p>
                <Image 
                    src={pokemonData.pokemonImgSrc} 
                    alt={pokemonData.pokemonName} 
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}