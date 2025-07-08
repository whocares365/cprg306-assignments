"use client";

export default function Item({item, onSelect, selected}){
    let {category, id, name, quantity} = item;
    const baseStyle = "p-2 pl-3 my-4 mx-2 w-55 border-2 rounded-md hover:border-4 hover:h-17";
    const selectedStyle = selected 
        ? "bg-gray-600 border-cyan-300"
        : "bg-slate-900 border-cyan-500 hover:bg-gray-700";

    return(
        <div 
            className={`${baseStyle} ${selectedStyle}`} 
            onClick={() => onSelect(name)}
        >
            <p>{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}