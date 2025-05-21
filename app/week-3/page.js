import BackButton from "../_components/back-button";
import ItemList from "../week-3/items-list";
import ShoppingList from "../_components/shopping-list";

export default function Page() {
    return (
        <main className="bg-sky-950 text-white font-serif p-3">
            <ShoppingList />
            <BackButton />
            <br/><ItemList />
        </main>
    );
};