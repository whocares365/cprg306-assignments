"usr client";
import { useState } from "react";

export default function NewItem(){
    
    

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity;
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if (currentQuantity > 1){
            setQuantity(currentQuantity - 1);
        }
    }

    const reset = () => {
        setQuantity(1);
    }

    let resetStyle = "bg-gray-400 text-black mt-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md w-28";
    if (quantity > 1) {
        resetStyle = "bg-blue-900 hover:bg-blue-700 mt-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md w-28";
    }
    let decrementButtonStyle = "bg-blue-900 hover:bg-blue-700 mr-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md w-8";
    if (quantity == 1) {
        decrementButtonStyle = " w-8 text-black bg-gray-400 mr-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md";
    }
    let incrementButtonStyle = "bg-blue-900 hover:bg-blue-700 ml-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md w-8";
    if (quantity == 20) {
        incrementButtonStyle = " w-8 text-black bg-gray-400 ml-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md";
    }

    return (
        <div className="m-auto text-center my-8 bg-slate-900 py-3 w-50 border-solid border-2 border-cyan-500 rounded-md">
            <button 
                className={decrementButtonStyle }
                onClick={decrement}
                >
                -
            </button>

            <p className="inline-block text-black text-center bg-white p-1 rounded w-8">{quantity}</p>

            <button 
                className={incrementButtonStyle} 
                onClick={increment}>
                +
            </button>
            <button
                className={resetStyle}
                onClick={reset}>
                Reset
            </button>
        </div>
    );
}