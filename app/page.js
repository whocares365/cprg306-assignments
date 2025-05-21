import AssignmentList from "./_components/assignemt-list";

export default function Home() {
  return(
    <main className="py-25 px-65 bg-sky-950 h-screen text-white">
      <h1 className="text-4xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <AssignmentList />
    </main>
    );
}
