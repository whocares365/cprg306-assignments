"use client";

import Item from "../week-6/item";
import { useState } from "react";

export default function ItemsList({grocery}) {

    const [sortBy, setSortBy] = useState("name")

    grocery.sort( (a, b) => {
        let ItemA = a[sortBy].toUpperCase();
        let ItemB = b[sortBy].toUpperCase();
        if (ItemA < ItemB) return -1;
        if (ItemA > ItemB) return 1;
        return 0;
    })

    const clickedButtonStyle = "bg-blue-400 rounded-md border-2 border-black pl-2 pr-2 mr-2";
    const buttonStyle = "bg-blue-800 rounded-md border-2 border-black pl-2 pr-2 mr-2 hover:bg-blue-600";

    let nameButton;
    let categoryButton;

    if (sortBy == "name") {
        nameButton = clickedButtonStyle;
        categoryButton = buttonStyle;
    } else {
        categoryButton = clickedButtonStyle;
        nameButton = buttonStyle;
    }

    const handleNameSort = () => {
        setSortBy("name");
    }

    const handleCategorySort = () => {
        setSortBy("category");
    }
    
    return(
        <div>
            <section className="ml-2">
                <h2>Sort by:</h2>
                <button type="button" onClick={handleNameSort} className={nameButton}>Name</button>
                <button type="button" onClick={handleCategorySort} className={categoryButton}>Category</button>
                <button type="button" disabled className="bg-gray-400 text-black rounded-md pr-2 pl-2">Group by Category</button>
            </section>
            <ul>
                {grocery.map( (item) => 
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} sortType={sortBy}/>)}
            </ul>
        </div>

    );
}