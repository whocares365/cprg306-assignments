import Link from "next/link";


export default function AssignmentLink({link, week}) {
    return (
        <Link href={link} className=" hover:text-blue-200">Week {week} Assignment</Link>
    );
}