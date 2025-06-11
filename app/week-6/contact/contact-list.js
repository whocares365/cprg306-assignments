"use client";

import { useState } from "react";
import ContactCard from "./contact-card";
import contactData from "./contacts-info.json"

export default function ContactList() {

    let [filter, setFilter] = useState("all");
    let [sortBy, setSortBy] = useState("none");

    let contactArray = contactData.map( (contact) => ({...contact}));
    const handleFilterChange = (event) => setFilter(event.target.value);
    const handleSortByChange = (event) => setSortBy(event.target.value); 

    if(filter != "all") {
        contactArray = contactArray.filter(
            (contact) => contact.type == filter
        );
    }

    if(sortBy != "none") {
        contactArray.sort( (a, b) => {
            if(isNaN(parseInt(a[sortBy]))) {
                let nameA = a[sortBy].toUpperCase();
                let nameB = b[sortBy].toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
           } else {
            return a.id - b.id;
           }
        } );
    }




    return(
        <section>
            <div>
                <div>
                    <label>Filter By: </label>
                    <select onChange={handleFilterChange}>
                        <option value="all">All contacts</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div>
                    <label>Sort By: </label>
                    <select onChange={handleSortByChange}>
                        <option value="none">None:</option>
                        <option value="fname">First Name:</option>
                        <option value="lname">Last Name</option>
                        <option value="Id">ID</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {contactArray.map( (contact) => (
                    <ContactCard key={contact.id} contactObj={contact} />
                ) )}
            </div>
        </section>
    );
}
