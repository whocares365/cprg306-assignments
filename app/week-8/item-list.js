import Item from "./item.js";
import {useState} from "react";

export default function ItemList({items, onItemSelect, selectedName}){

    const [sortBy, setSortBy] = useState("name")

    let nameButton;
    let categoryButton;

    const clickedButton = "bg-slate-800 rounded-md border-2 border-black pl-2 pr-2 mr-2";
    const button  = "bg-cyan-500 rounded-md border-2 border-black pl-2 pr-2 mr-2 hover:bg-slate-600";
    
    items.sort( (a, b) => {
        let ItemA = a[sortBy].toUpperCase();
        let ItemB = b[sortBy].toUpperCase();
        if (ItemA < ItemB) return -1;
        if (ItemA > ItemB) return 1;
        return 0;
    })

    const handleNameSort = () => {
        setSortBy("name");
    }

    const handleCategorySort = () => {
        setSortBy("category");
    }
    
    if (sortBy == "name") {
        nameButton = clickedButton;
        categoryButton = button;
    } else {
        nameButton = button;
        categoryButton = clickedButton;
    }

    return(
        <div>
            <h3>Sort by:</h3>
            <button type="button" onClick={handleNameSort} className={nameButton}>Name</button> 
            <button type="button" onClick={handleCategorySort} className={categoryButton}>Category</button>
            {items.map( (product) => <Item key={product.id} item={product} onSelect={onItemSelect} selected={selectedName === product.name}/> )}
        </div>
    );
}