import Link from "next/link";

export default function BackButton() {
    return(
            <Link href="/" className="hover:text-blue-200 text-2xl">&lt; Back</Link>
    );
};