export default function Item({name, quantity, category}) {
    return(
        <li className="bg-slate-900 my-4 mx-2 p-2 w-80 border-solid border-2 border-cyan-500 rounded-md">
            <p className="text-xl font-bold">{name}</p> 
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    );
}