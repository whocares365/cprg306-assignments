import Link from "next/link";


export default function StudentInfo() {
    return(
        <div className=" flex my-8 bg-slate-900 py-3 w-60 border-solid border-2 border-cyan-500 rounded-md">
            <div className="text-right flex-1">
                Name:
                <br/>Student ID:
                <br/>GitHub Link:
            </div>
            <div className="flex-1 mx-2">
                Sasha
                <br/>000962156
                <br/><Link href="https://github.com/whocares365" target="_blank" className="hover:text-blue-200">whocares365</Link>
            </div>
        </div>
    );
}