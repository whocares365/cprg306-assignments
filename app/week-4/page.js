"use client";

import BackButton from "../_components/back-button";
import { mainStyle } from "@/app/_utils/style-vars"
import NewItem from "./new-Item";


export default function Page(){
    return (
        <main className={mainStyle}>
            <BackButton/>
            <NewItem />
        </main>
    );
}