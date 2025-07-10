import { useState } from "react";

export default function NewItem({onAddItem}){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");
    const [groceryID, setGroceryID] = useState(0);

    const handleIncrease = () => {
        let quan = quantity;
        if (quan < 20){
            setQuantity(quan + 1);
        }
    }

    const handleDecrease = () => {
        let quan = quantity;
        if(quan > 1){
        setQuantity(quan - 1);
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
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

        onAddItem(item)

        console.log(`${item.qty} ${item.name} from ${item.prodCat} category was added to your cart!`);
        
        setName("");
        setQuantity(1);
        setCategory("");
    }

    let minusButton;
    let plusButton;
    const activeButton = "bg-cyan-500 text-white w-7 h-7 m-1 rounded hover:bg-slate-600";
    const greyedButton = "bg-gray-500 text-white w-7 h-7 m-1 rounded";

    if(quantity == 1){
        minusButton = greyedButton;
    } else {
        minusButton = activeButton;
    }

    if(quantity == 20){
        plusButton = greyedButton;
    } else {
        plusButton = activeButton;
    }

    return(
            <form 
                className="mt-16.5 ml-6 text-center bg-slate-900 p-5 w-85 h-46 border-solid border-3 border-cyan-500 rounded-md"
                onSubmit={handleSubmit}
            >

                <input 
                    required
                    value={name} 
                    onChange={handleNameChange}
                    className="text-black bg-white border-2 border-gray-600 w-72 h-10 rounded-md p-2"
                />

                <div className="inline-block bg-white text-black w-27 rounded-md mt-2 mr-5 border-2 border-gray-600">
                    <button type="button" onClick={handleDecrease} className={minusButton}> - </button> 
                    <p className="inline-block m-2 w-4 text-center">{quantity}</p>
                    <button type="button" onClick={handleIncrease} className={plusButton}> + </button>
                </div>

                <select 
                    className="w-40 h-11 bg-white rounded-md text-black border-2 border-gray-600"
                    required
                    onChange={handleCategoryChange}
                    value={category}
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

                <button 
                    type="submit"
                    className="mt-2 w-72 h-10 bg-cyan-500 hover:bg-slate-600 rounded-md border-1 border-white"
                > 
                    + 
                </button>
            </form>
    );
}