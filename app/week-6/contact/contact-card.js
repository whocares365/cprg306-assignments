export default function ContactCard( {contactObj} ) {

    let {id, fname, lname, email, phone, type} = contactObj;


    return(
        <div className="bg-blue-400 p-5 rounded">
            <h3>{fname} {lname}</h3>
            <p><b>Email: </b> {email}</p>
            <p><b>Phone: </b> {phone}</p>
            <p><b>Contact Type: </b> {type}</p>
            <p><b>ID:</b> {id}</p>
        </div>
    );
}