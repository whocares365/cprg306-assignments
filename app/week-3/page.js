import BackButton from "../_components/back-button";
import ItemList from "../week-3/items-list";
import ShoppingList from "../_components/shopping-list";
import { mainStyle } from "../_utils/style-vars";

export default function Page() {
    return (
        <main className= { mainStyle } >
            <ShoppingList />
            <BackButton />
            <br/><ItemList />
        </main>
    );
};