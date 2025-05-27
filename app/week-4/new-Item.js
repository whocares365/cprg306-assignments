"usr client";
import { useState } from "react";

export default function NewItem(){
    
    

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity;
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1);
        } else {
            
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if (currentQuantity > 1){
            setQuantity(currentQuantity - 1);
        } else {
            decrementButtonStyle = "bg-gray-400 m-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md";
        }
    }

    let decrementButtonStyle = "bg-blue-900 m-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md w-8";
    if (quantity == 1) {
        decrementButtonStyle = " w-8 text-black bg-gray-400 m-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md";
    }
    let incrementButtonStyle = "bg-blue-900 m-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md w-8";
    if (quantity == 20) {
        incrementButtonStyle = " w-8 text-black bg-gray-400 m-2 py-1 px-2 border-solid border-1 border-cyan-500 rounded-md";
    }

    return (
        <div className="m-auto text-center my-8 bg-slate-900 py-3 w-40 border-solid border-2 border-cyan-500 rounded-md">
            <button 
                className={decrementButtonStyle }
                onClick={decrement}>
                -
            </button>

            <p className="inline-block text-black text-right bg-white p-1 rounded w-8">{quantity}</p>

            <button 
                className={incrementButtonStyle} 
                onClick={increment}>
                +
            </button>

        </div>
    );
}