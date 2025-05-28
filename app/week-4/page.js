"use client";

import BackButton from "../_components/back-button";
import { mainStyle } from "@/app/_utils/style-vars"
import NewItem from "./new-Item";
import ShoppingList from "../_components/shopping-list";


export default function Page(){
    return (
        <main className={mainStyle}>
            <ShoppingList />
            <BackButton/>
            <NewItem />
        </main>
    );
}