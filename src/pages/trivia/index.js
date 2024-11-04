import { useEffect, useState } from 'react';
// import Image from "next/image";
import Header from '@/components/Header';

export default function Trivia() {
    const[triviaData, setTriviaData] = useState(null);

    async function fetchTrivia() {
        try {
            const response = await fetch('/api/trivia');
            const data = await response.json();
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
        <div className='bg-amber-100'>
            <Header/>
            <div className="text-black">
                <h1>Animal Trivia!</h1>
                {triviaData.map((question, index) =>(
                    <div key={index}>
                        <p>Question: {question.trivia}</p>
                        <p>Answer: {question.answer}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

