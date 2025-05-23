import Link from "next/link";
import StudentInfo from "./student-info";
import BackButton from "../_components/back-button";
import ShoppingList from "../_components/shopping-list";

export default function Page() {
    return(
        <main className="bg-sky-950 h-screen text-white anchor:text-white p-4">
            <ShoppingList />
            <BackButton />
            <StudentInfo />
        </main>
    );
}