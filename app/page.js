import AssignmentList from "./_components/assignment-list";
import PracticeList from "./_components/practice-list";
import { mainStyle } from "./_utils/style-vars";

export default function Home() {
  return(
    <main className={mainStyle}>
      <h1 className="pt-30 text-center text-4xl font-bold ">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex justify-center ">
        <AssignmentList />
        <PracticeList />
      </div>
    </main>
    );
}
