"use client";
import { useState } from "react";

export default function NewItem(){

    // UseState Hooks
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => setName(event.target.value);
    const handleQuantityChange = (event) => setQuantity(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    // functions increase/ decrease / handle submit
    const handleQuantityIncrease = () => {
        let currentQuantity = quantity;
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }

    const handleQuantityDecrease = () => {
        let currentQuantity = quantity;
        if (currentQuantity > 1) {
            setQuantity(currentQuantity - 1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            prodName : name,
            qty : quantity,
            prodCat: category
        };

        alert(`${item.qty} ${item.prodName}${item.qty > 1 ? "s":""} from ${item.prodCat} category added to your cart!`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    } 

    //Button Styling 
    const activeButton = "bg-blue-900 text-white w-7 h-7 m-1 rounded hover:bg-blue-950";
    const greyedButton = "bg-gray-500 text-white w-7 h-7 m-1 rounded"

    let plusButton;
    let minusButton;

    if (quantity < 20) {
        plusButton = activeButton;
    } else {
        plusButton = greyedButton;
    }

   if (quantity > 1) {
        minusButton = activeButton;
    } else {
        minusButton = greyedButton;
    }


    return (
        <div className="m-auto text-center my-8 bg-slate-900 p-5 w-85 h-46 border-solid border-3 border-cyan-500 rounded-md">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                required
                placeholder="Item name"
                className="text-black bg-white border-2 border-gray-600 w-72 h-10 rounded-md p-2"
                onChange={handleNameChange}
                value={name}
                />

                <div className="inline-block bg-white text-black w-27 rounded-md mt-2 mr-5 border-2 border-gray-600">
                    <button 
                    type="button"
                        onClick={handleQuantityDecrease}
                        className={minusButton}
                        >
                        -
                    </button>
                    <p className="inline-block m-2 w-4 text-center">{quantity}</p>
                    <button
                        type="button"
                        onClick={handleQuantityIncrease}
                        className={plusButton}
                        >
                        +
                    </button>
                </div>
                
                <select 
                value={category}
                onChange={handleCategoryChange}
                className="w-40 h-11 bg-white rounded-md text-black border-2 border-gray-600"
                >
                    <option disabled value="false" className="bg-gray-300 text-white p-2">Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

                <div>
                    <button
                        type="submit"
                        className="mt-2 w-72 h-10 bg-blue-900 hover:bg-blue-950 rounded-md border-1 border-cyan-700"
                        >
                        +
                    </button>
                </div>
            </form>
        </div>
        
    );
}