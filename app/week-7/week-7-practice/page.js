"use client";

import dogData from "./dogs.json"
import BackButton from "@/app/_components/back-button";
import { mainStyle } from "@/app/_utils/style-vars";
import DogList from "./dog-list";
import DogForm from "./dog-form";
import {useState} from "react";

export default function Week7Practice(){
    
    const [dogs, SetDogs] = useState(dogData);
    
    const handleAddDog = (dog) => {
        SetDogs([...dogs, dog])
    }

    const handleDogDelete = (id) => {
        SetDogs(dogs.filter((dog) => dog.id != id));
    }
    
    return(
        <main className={mainStyle}>
            <BackButton/>
            <h1 className="text-2xl my-2">Week 7 Page Practice</h1>
            <h2 className="text-lg mb-1 ">Dog List</h2>
            <div className="flex">
                <DogList dogs={dogs} onDeleteDog={handleDogDelete}/>
                <DogForm onAddDog={handleAddDog}/>
            </div>
        </main>
    );
}