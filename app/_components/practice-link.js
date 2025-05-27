import Link from "next/link";


export default function PracticeLink({link, practice}) {
    return (
        <Link href={link} className=" hover:text-blue-200 mr-3">{practice}</Link>
    );
}