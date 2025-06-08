"use client";

import {useState} from "react";
import {mainStyle} from "../_utils/style-vars";
import BackButton from "../_components/back-button";
import NewItem from "./new-Item";

export default function Page() {
    return (
        <main className={mainStyle}>
            <BackButton />
            <NewItem />
        </main>
    );
}