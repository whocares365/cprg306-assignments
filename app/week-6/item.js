export default function Item({name, quantity, category, sortType}) {
    const itemStyle = "bg-slate-900 my-4 mx-2 p-2 w-80 border-solid border-2 border-cyan-500 rounded-md";

    return(
        <li className={itemStyle}>
                <p>{name}</p>
                <p>Buy {quantity} in {category}</p>
            </li>
    );
}