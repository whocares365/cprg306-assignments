
import Dog from "./dog"

export default function DogList({dogs, onDeleteDog}){
    return(
        <div className="mr-4">
            {dogs.map((dog) => (
                <Dog key={dog.id} DogObject={dog} onDelete={onDeleteDog}/>
            ))}
        </div>
    );
}