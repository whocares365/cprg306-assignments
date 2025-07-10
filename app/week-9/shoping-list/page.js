"use client";

import BackButton from "@/app/_components/back-button";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import Groceries from "./items.json"
import MealIdeas from "./meal-ideas";

export default function Week8(){

    let [products, setProducts] = useState(Groceries);
    let [ingredient, setIngredient] = useState(null);
    let [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (item) => {
        setProducts([...products, item])
    }

    function handleSelected(productName) {
        setSelectedItemName(productName);
        let cleaned = productName
            .toLowerCase()
            .split(",")[0]               // remove ", 1 kg", ", dozen", etc.
            .replace(/[^\p{L}\s]/gu, '') // remove emojis and symbols
            .trim();

        setIngredient(cleaned);
    }

    return(
        <main className="bg-sky-950 text-white anchor:text-white p-3">
            <BackButton/>
            <div className="flex">
                <ItemList items={products} onItemSelect={handleSelected} selectedName={selectedItemName}/>
                <div>
                    <NewItem onAddItem={handleAddItem}/>
                    <MealIdeas ingredient={ingredient}/>
                </div>
            </div>
        </main>
    );
}