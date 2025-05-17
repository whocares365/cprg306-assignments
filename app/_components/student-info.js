import Link from "next/link";


export default function StudentInfo() {
    return(
        <div>
            <p>
                Name: Sasha Maksymenko
                <br/>Student ID: 000962156
                <br/>My GitHub Account: <Link href="https://github.com/whocares365" target="_blank" className=" hover:text-green-300 hover:underline">whocares365</Link>
            </p>
        </div>
    );
}