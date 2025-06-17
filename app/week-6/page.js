"use client";

import BackButton from "../_components/back-button";
import ItemsList from "./item-list";

export default function Week6(){
    return(
        <main className="flex-col bg-sky-950 text-white anchor:text-white p-3">
            <BackButton/>
            <ItemsList/>
        </main>
    );
}