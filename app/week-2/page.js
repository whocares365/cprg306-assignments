import StudentInfo from "./student-info"
import BackButton from "../_components/back-button";
import ShoppingList from "../_components/shopping-list";
import { mainStyle } from "../_utils/style-vars";

export default function Page() {
    return(
        <main className={mainStyle}>
            <ShoppingList />
            <BackButton />
            <StudentInfo />
        </main>
    );
}