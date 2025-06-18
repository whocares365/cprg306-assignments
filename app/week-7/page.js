"use client";

import {useState} from "react";
import BackButton from "../_components/back-button";
import ItemsList from "./item-list";
import NewItem from "./new-Item";
import Grocery from "../week-6/items.json"

export default function Week7Page(){

    const [grocery, SetGrocery] = useState(Grocery);

    const handleAddItem = (item) => {
        SetGrocery([...grocery, item]);
    }
    
    return(
        <main className="bg-sky-950 text-white anchor:text-white p-3">
            <BackButton/>
            <div className="flex">
                <ItemsList grocery={grocery}/>
                <NewItem onAddItem={handleAddItem}/>
            </div>
        </main>
    );
}