"use client";

import BackButton from "../../_components/back-button";
import { mainStyle } from "../../_utils/style-vars";
import { useState } from "react";
import RegistrationForm from "./managed-form";


export default function Page() {

    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        if (formOpen) {
            setFormOpen(false);
        } else {
            setFormOpen(true);
        }
    }



    return (
      <main className={mainStyle}>
        <BackButton />
        <h1 className=" mt-2 font-mono text-lg">Registration</h1>
        <button 
          onClick={toggleForm} 
          className="mb-10border rounded-md bg-amber-300 hover:bg-amber-500 active:bg-amber-100 text-black p-1"
          >Toggle Registration Form
        </button>
        { formOpen ? <RegistrationForm /> : <p>Hello</p>}
      </main>  
    );
}