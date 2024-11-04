import { useEffect, useState } from 'react';
// import Image from "next/image";
import Header from '@/components/Header';

export default function Trivia() {
    const[triviaData, setTriviaData] = useState(null);

    async function fetchTrivia() {
        try {
            const response = await fetch('/api/trivia');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            //Read the response as text
            const data = await response.json();
            console.log('API Response:', data);
            
            setTriviaData(data);
        } catch (error) {
            console.error('Error fetching Trivia Questions:', error);
        }
    }
    useEffect(() => {
        fetchTrivia();
    }, []);

    if (!triviaData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-amber-100 h-screen'>
            <Header/>
            <div className="text-black p-4 rounded-lg shadow-md bg-white mt-6 w-2/3 m-auto">
                <h1 className='text-2xl font-bold mb-4'>Animal Trivia!</h1>
                {triviaData.map((question, index) =>(
                    <div key={index}>
                        <p className='text-amber-900 bg-amber-100 p-2 rounded-md border border-amber-300 shadow-md font-semibold'>Question: {question.trivia}</p>
                        <p className='text-amber-900 bg-amber-50 p-2 rounded-md cursor-pointer hover:bg-amber-100'>Answer: {question.answer}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

