import { useEffect, useState } from 'react';
import Image from "next/image";
import Header from '@/components/Header';

export default function Ravelry() {
    const [patternData, setPatternData] = useState(null);

    async function fetchPatterns() {
        try {
            const response = await fetch('/api/ravelry');
            const data = await response.json();
            setPatternData(data);
        } catch (error) {
            console.error('Error fetching pattern data!');
        }
    }
    useEffect(() => {
        fetchPatterns();
    }, []);

    if (!patternData) {
        return <div>Loading...</div>
    }

    return (
        <div className='bg-amber-100'>
            <Header/>
            <h1 className='text-4xl text-amber-600 text-center mt-10'>Pattern of the Day!</h1>
        <div className="text-black bg-white shadow-md rounded-md p-6 w-96 mx-auto mt-10">
            <h1 className='text-2xl'>Knitting Pattern Details</h1>
            <p className='text-xl'>Name: {patternData.name}</p>
            <Image
                    src={patternData.image} 
                    alt={patternData.name} 
                    width={300}
                    height={300}
            />
            <p className='text-xl'>Designer: {patternData.designer}</p>
        </div>
        </div>
          
       
    );
}