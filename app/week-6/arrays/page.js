"use client"; 
import BackButton from "@/app/_components/back-button";
import { mainStyle } from "@/app/_utils/style-vars";

export default function ArrayManipulation() {

    let array1 = [1,2,3,4,5];
    array1.push(6); // adds number 6 to the end of the array
    array1.splice(2,1); //(2- start index, 1     - amount of elements to delete)

    let numbers = [5,3,9,1,4];
    let doubled = numbers.map( (number) => number * 2); //iterates through array and returns *2
    let lessThanFive = numbers.filter( (number) => number < 5); // filters numbers less than 5
    let concatNumbers = numbers.concat(doubled); // adds two arrays together
    let spreadNumbers = [...numbers, 12, 16, ...doubled]; // creates a copy of a list
    let sum = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 ); // 0 - starting point of accumulator. currentValue - iterator through the list. returns one number (reduced list) (sum)
    
    // sorting thing
    const sortingLogic = (a, b) => {
        if(a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    
    let sortedNumbers = [...spreadNumbers];
    sortedNumbers.sort(sortingLogic);
    
    return (
        <main className={mainStyle}>
            <BackButton/>
            <h1>Arrays</h1>
            <p>{array1.join("|")}</p>
            <p>{array1}</p>
            <p>{numbers.join()}</p>
            <p>{doubled.join()}</p>
            <p>{lessThanFive.join()}</p>
            <p>{concatNumbers.join()}</p>
            <p>{spreadNumbers.join()}</p>
            <p>{sum}</p>
            <p>{sortedNumbers.join()}</p>
        </main>
    );
}