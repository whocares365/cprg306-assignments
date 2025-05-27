import BackButton from "@/app/_components/back-button";
import { mainStyle } from "@/app/_utils/style-vars";

export default function FunctionPage() {
    
    function helloWorld(username, dayOfWeek) {
        return "Hello, World! Welcome back " + username + ". Today is " + dayOfWeek + ".";
    }

    let helloWorld2 = function (username, dayOfWeek) {
        //return "Hello, World! Welcome back " + username + ". Today is " + dayOfWeek + ".";
        return `Hello, World! Welcome back ${username}. Today is ${dayOfWeek}.`;
    } 

    const helloWorld3 = (username) => {
        return `Hello, ${username}!`;
    }

    const helloWorld4 = (username) => `Hello, ${username}` 

    const helloMath = (a, b) => a + b;

    const louder = (textOutputFunc, uName, DayOfWeek) => {
        let thisText = textOutputFunc(uName, DayOfWeek);
        return thisText.toUpperCase();
    }
    
    return(
        <main className={mainStyle}>
            <BackButton />
            <h1>Functions</h1>
            <p>{helloWorld("Sasha", "Tuesday")}</p>
            <p>{helloWorld2("Bob", "Wednesday")}</p>
            <p>{helloWorld3("Oleksandr")}</p>
            <p>{helloWorld4("Sasha")}</p>
            <p>{helloMath(3, 5)}</p>
            <p>{louder(helloWorld2, "Oleksandr", "Tuesday")}</p>
        </main>
    );
}