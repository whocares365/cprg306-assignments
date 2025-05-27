import BackButton from "../_components/back-button";
import ItemList from "../week-3/items-list";
import ShoppingList from "../_components/shopping-list";
import { mainStyle } from "../_utils/style-vars";

export default function Page() {
    return (
        <main className="flex-column bg-sky-950 text-white anchor:text-white p-3" >
            <ShoppingList />
            <BackButton />
            <br/><ItemList />
        </main>
    );
};