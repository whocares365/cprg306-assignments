"use client";
import { useState } from "react";
import BackButton from "@/app/_components/back-button";
import { mainStyle } from "@/app/_utils/style-vars";

export default function CounterPage() {
    const [count, setCount] = useState(0); 

    const incrementCounter = () => {
        let currentCount = count;
        if (currentCount <= 9){
        setCount(currentCount + 1);
        }
    }
    let buttonStyle = "bg-blue-900 text-white rounded px-2 py-1 m-3 hover:bg-blue-600"
    if (count >= 10) {
        buttonStyle = "bg-gray-500 text-white rounded px-2 py-1 m-3 ";
    }
    return(
        <main className={mainStyle}>
            <BackButton />
            <h1 className="mt-3">Simple Counter</h1>
            <p>Current Count: {count}</p>
            <button 
                className={buttonStyle} 
                onClick={incrementCounter}>
                Increment
            </button>
            <button
                className="bg-blue-900 text-white rounded px-2 py-1 m-3 hover:bg-blue-600" 
                onClick={() => setCount(0)}>
                Reset Counter
            </button>
        </main>
    );
}