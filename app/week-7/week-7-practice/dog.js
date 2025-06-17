export default function Dog({DogObject, onDelete}){
    let {id, name, age} = DogObject;

    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <button type="button" onClick={() => onDelete(id)} className="border-1 border-black rounded-md bg-red-500 px-2 py-0.5 my-2">Delete</button>
            <hr className="w-50"/>
        </div>
    );
}