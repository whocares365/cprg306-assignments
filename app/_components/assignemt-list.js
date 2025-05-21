import AssignmentLink from "./assignment-link";

export default function AssignmentList({ name, link }) {
    return (
        <ul className="text-lg my-5">
            <li><AssignmentLink link="./week-2" week={2} /></li>
            <li><AssignmentLink link="./week-3" week={3} /></li>
            <li><AssignmentLink link="#" week={4} /></li>
            <li><AssignmentLink link="#" week={5} /></li>
            <li><AssignmentLink link="#" week={6} /></li>
            <li><AssignmentLink link="#" week={7} /></li>
            <li><AssignmentLink link="#" week={8} /></li>
            <li><AssignmentLink link="#" week={9} /></li>
            <li><AssignmentLink link="#" week={10} /></li>
        </ul>
    );
}