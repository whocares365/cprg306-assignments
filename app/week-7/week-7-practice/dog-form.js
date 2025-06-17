"use client";
import {useState} from "react";

export default function DogForm({onAddDog}){

    const [dog, SetDog] = useState({id: 0, name: "", age:0 })
    const [DogID, SetDogID] = useState(4);

    const handleSubmit = (event) => {
        event.preventDefault();
        SetDogID(DogID + 1);
        console.log(dog);
        onAddDog({...dog, id: DogID});
        SetDog({id: 0, name: "", age: 0});
    }

    const handleNameChange = (event) => {
        
        SetDog({...dog, name: event.target.value});
    }

    const handleAgeChange = (event) => {
        SetDog({...dog, age: parseInt(event.target.value) })
    }
    return(
        <form onSubmit={handleSubmit} className="border-2 border-cyan-500 rounded-md p-2 px-4 h-37">
            <h2 className="text-2xl my-1 border-b-2 border-cyan-500">Dog Form</h2>
            <label> Name:</label> <input className="bg-white rounded text-black pl-2 w-40 mb-2" type="text" value={dog.name} onChange={handleNameChange} /> <br/>
            <label > Age:</label> <input className="ml-3.5 bg-white rounded text-black pl-2 w-40" type="number" value={dog.age} onChange={handleAgeChange} /> <br/>
            <button type="submit" className="mt-2 ml-22 bg-blue-800 border-1 border-black px-3 rounded-md *:">Add Dog</button>
        </form>
    );
}   