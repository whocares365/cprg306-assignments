import BackButton from "@/app/_components/back-button";
import ContactList from "./contact-list";

export default function ContactPage() {
    return(
        <main className="bg-sky-200 p-10 h-screen">
            <BackButton/>
            <h1 className="text-3xl m-5">Contact List</h1>
            <ContactList/>
        </main>
    );
}