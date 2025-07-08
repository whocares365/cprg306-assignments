"use client";
import { useState } from "react";

export default function NewItem({onAddItem}){

    // UseState Hooks
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [groceryID, setGroceryID] = useState(0);
    

    const handleNameChange = (event) => setName(event.target.value);
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

        setGroceryID(groceryID + 1);

        const item = {
            "id": groceryID.toString(),
            "name" : name,
            "quantity" : quantity,
            "category": category
        };

        onAddItem(item);

        console.log(`${item.qty} ${item.name} from ${item.prodCat} category was added to your cart!`);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    } 

    //Button Styling 
    const activeButton = "bg-cyan-500 text-white w-7 h-7 m-1 rounded hover:bg-slate-600";
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
        <div className="mt-17 text-center my-8 bg-slate-900 p-5 w-85 h-46 border-solid border-3 border-cyan-500 rounded-md">
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
                    <option disabled value="false" className="bg-gray-300 text-white text-center p-2">--Category--</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen goods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

                <div>
                    <button
                        type="submit"
                        className="mt-2 w-72 h-10 bg-cyan-500 hover:bg-slate-600 rounded-md border-1 border-white"
                        >
                        +
                    </button>
                </div>
            </form>
        </div>
        
    );
}