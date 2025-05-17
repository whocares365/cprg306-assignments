import Link from "next/link";
import StudentInfo from "../_components/student-info";

export default function Page() {
    return(
        <main className="bg-black h-screen text-white anchor:text-white">
            <h1 className="text-3xl">Shopping List</h1>
            <Link href="/" className="hover:text-green-300 hover:underline text-2xl">&lt; Back</Link>
            <br/><br/><StudentInfo />
        </main>
    );
}