"use client";

import { useUserAuth } from "./_utils/auth-context";

import BackButton from "@/app/_components/back-button";

export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    return(
        <main className="bg-sky-950 text-white anchor:text-white p-3 h-screen">
            <BackButton/>
            <h1>Assignment Page</h1>
            <p>
                {user ? (
                    <button onClick={firebaseSignOut}>Sign Out</button>
                ):(
                    <button onClick={gitHubSignIn}>Sign In</button>
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