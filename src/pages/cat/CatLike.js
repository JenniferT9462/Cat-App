// Import useState so I can add a onClick for my button
import Image from "next/image";
import { useState } from "react"

export default function CatLike() {
    //Declare useState and set to false to start
    const [isLiked, setIsLiked] = useState(false);
    //Handle click with arrow function
    const handleLikeClick = () => {
        //setIsLiked to true when clicked
        setIsLiked(!isLiked);
    };
    return (
        <div className="flex justify-center">
            <div className=" border-2 border-amber-600 m-12 p-4">
                {/* Show heart when the isLiked state is true */}
                {isLiked && <div><Image src="/heart.png"/></div>}
                <p className="text-black">Click the button if you like cats!</p>
                <button
                    // Add handleLikeClick on the button
                    onClick={handleLikeClick} 
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 shadow-sm shadow-slate-500">
                        {/* Set the text in the button to Like or UnLike depending on the state */}
                        {isLiked ? 'Unlike' : 'Like'}
                </button>
                
            </div>
        </div>
        
    )
}
