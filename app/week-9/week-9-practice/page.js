"use client";

import { useUserAuth} from "../_utils/auth-context"

import BackButton from "@/app/_components/back-button";
import { useState } from "react";

export default function Page(){
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const darkMode = "bg-sky-950 text-white anchor:text-white p-3 h-screen";
    const lightMode = "bg-white text-black anchor:text-black p-3";

    const button = "ml-2 bg-green-400 hover:bg-green-500 text-black border-1 border-black rounded-md px-3 ";
    const inactiveButton = "ml-2 bg-gray-400 text-white border-1 border-black rounded-md px-3 ";
    const signButton = "m-3 border-1 border-black rounded-md bg-blue-700 px-3";

    const [pageMode, setPageMode] = useState("light");
    const [buttonMode, setButtonMode] = useState("light");

    const handleDarkMode = () => {
        setPageMode("dark");
        setButtonMode("dark");

    }

    const handleLightMode = () => {
        setPageMode("light");
        setButtonMode("light");
    }

    return(
        <main className={pageMode == "light" ? lightMode : darkMode}>
            <BackButton/>
            <h1>Assignment Page</h1>
            <button type="button" onClick={handleLightMode} className={buttonMode == "light" ? inactiveButton : button}>Light Mode</button>
            <button type="button" onClick={handleDarkMode} className={buttonMode == "light" ? button : inactiveButton}>Dark Mode</button>

            <p>
                {user ? (
                    <button onClick={firebaseSignOut} className={signButton}>Sign Out</button>
                ):(
                    <button onClick={gitHubSignIn} className={signButton}>Sign In</button>
                )}
            </p>
           {user && (<p>
            Welcome, {user.displayName}! <br/>
            Email: {user.email} <br/>
            Photo: <img src={user.photoURL} alt={user.displayName}/>
            </p>)}
        </main>
    );
}