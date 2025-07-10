import AssignmentLink from "./assignment-link";

export default function AssignmentList({ name, link }) {
    return (
        <ul className="text-lg my-5 mr-50">
            <p className="text-cyan-600 font-bold text-xl">Assignments</p> 
            <li><AssignmentLink link="./week-2" week={2} /></li>
            <li><AssignmentLink link="./week-3" week={3} /></li>
            <li><AssignmentLink link="./week-4" week={4} /></li>
            <li><AssignmentLink link="./week-5" week={5} /></li>
            <li><AssignmentLink link="./week-6" week={6} /></li>
            <li><AssignmentLink link="./week-7" week={7} /></li>
            <li><AssignmentLink link="./week-8" week={8} /></li>
            <li><AssignmentLink link="./week-9/" week={9} /></li>
            <br/><p className="text-cyan-600 font-bold text-xl">Coming Soon:</p>
            <li>Week 10</li>
        </ul>
    );
}