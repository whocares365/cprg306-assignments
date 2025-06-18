export default function Item({name, quantity, category, sortType}) {

    return(
        <li className="bg-slate-900 p-2 pl-3 my-4 mx-2 w-55 border-2 border-r-10 border-cyan-500 rounded-md">
            <p>{name}</p>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}