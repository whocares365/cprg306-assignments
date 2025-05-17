import Link from "next/link";


export default function Home() {
  return(
    <main className="bg-black h-screen text-white">
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <br/><Link href="./week-2" className="hover:underline hover:text-green-300">Week-2  Assignment &gt;</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-3  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-4  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-5  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-6  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-7  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-8  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-9  Assignment - Coming Soon</Link>
      <br/><Link href="#" className="hover:underline hover:text-green-300">Week-10 Assignment - Coming Soon</Link>

    </main>
    );
}
