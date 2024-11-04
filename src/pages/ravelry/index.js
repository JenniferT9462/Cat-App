import { useEffect, useState } from 'react';
import Image from "next/image";

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
        <div>
          <h1>Knitting Pattern Details</h1>
           <p>Name: {patternData.name}</p>
           <Image
                src={patternData.image} 
                alt={patternData.name} 
                width={300}
                height={300}
           />
           <p>Designer: {patternData.designer}</p>
        </div>
       
    );
}