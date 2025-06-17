export default function Item({name, quantity, category, sortType}) {
    const itemStyle = "p-0.5 bg-cyan-500 my-4 mx-2 w-50 rounded-md";

    return(
        <li className={itemStyle}>
            <p className="mb-0.5 pl-2 pt-1 rounded-md bg-slate-900 ">{name}</p>
            <p className="pl-2 pt-1 rounded-md bg-slate-900 ">Buy {quantity} in {category}</p>
        </li>
    );
}