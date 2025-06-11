"use client";

import Item from "./item";
import Grocery from "./items.json"
import { useState } from "react";

export default function ItemsList() {

    const [sortBy, setSortBy] = useState("name")

    Grocery.sort( (a, b) => {
        let ItemA = a[sortBy].toUpperCase();
        let ItemB = b[sortBy].toUpperCase();
        if (ItemA < ItemB) return -1;
        if (ItemA > ItemB) return 1;
        return 0;
    })

    const clickedButtonStyle = "bg-blue-400 rounded-md border-2 border-black pl-2 pr-2 mr-2 hover:bg-blue-600";
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
                <button type="button" onClick={handleCategorySort} className={categoryButton}>Group by Category</button>
            </section>
            <ul>
                {Grocery.map( (item) => 
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} sortType={sortBy}/>)}
            </ul>
        </div>

    );
}