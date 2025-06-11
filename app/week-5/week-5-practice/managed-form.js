"use client";

import {useState} from "react";

export default function RegistrationForm() {

    let labelstyles = "inline-block w-50 mb-3";
    let inputStyles = "border-2 border-blue-500 rounded-md mb-3 bg-white text-black focus:bg-green-100 w-60";

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [subscription, setSubscription] = useState("");
    const [message, setMessage] = useState("");

    const handleMessageChange = (event) => setMessage(event.target.value);
    const subscriptionChange = (event) => setSubscription(event.target.value);
    const handleFullNameChange = (event) => {
        console.dir(event.target.value);
        setFullName(event.target.value);
    }
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleBirthDateChange = (event) => setBirthDate(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let registrationObject = {
            fName: fullName,
            mail: email,
            bDay: birthDate,
            plan: subscription,
            msg: message
        }

        alert(`
            Name: ${registrationObject.fName}
            Email: ${registrationObject.mail}
            Birthday: ${registrationObject.bDay}
            Plan Type: ${registrationObject.plan} |
            Message: ${registrationObject.msg}
            `);

            setFullName("");
            setEmail("");
            setBirthDate("");
            setSubscription("false");
            setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className={labelstyles}>Full Name: &nbsp;</label>
                <input type="text" className={inputStyles} placeholder="John Smith" onChange={handleFullNameChange} value={fullName}/>
                {/* <p>{fullName}</p> */}
            </div>
            <div>
                <label className={labelstyles}>Email: &nbsp;</label>
                <input type="email" placeholder="example@mail.ca" className={inputStyles} onChange={handleEmailChange} value={email}/>
            </div>
            <div>
                <label className={labelstyles}>Birthdate: &nbsp;</label>
                <input type="date" className={inputStyles} onChange={handleBirthDateChange} value={birthDate}/>
            </div>
            <div>
                <label className={labelstyles}>Subscription Type: &nbsp;</label>
                <select className={inputStyles} onChange={subscriptionChange} value={subscription}>
                    <option disabled value="false" className="text-black text-center">--Please Select a Plan--</option>
                    <option value="free" className="text-black">Free Plan</option>
                    <option value="basic" className="text-black">Basic Plan</option>
                    <option value="premium" className="text-black">Premium Plan</option>
                </select>
                <p> {subscription}</p>
            </div>
            <div>
                <label className={`${labelstyles}  align-top`}>Message:  &nbsp;</label>
                <textarea className={inputStyles} type="text" onChange={handleMessageChange} value={message}></textarea>
                <p>{message}</p>
            </div>
            <button className="border rounded-md bg-amber-300 hover:bg-amber-500 active:bg-amber-100 text-black p-1">Submit Registration</button>
        </form>
    );
}