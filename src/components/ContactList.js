import React from "react";
// import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{

console.log(props);

    const deleteContactHandler = (id) => {

        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact)=>{
        return(
           <ContactCard 
           contact={contact} 
           clickHandler={deleteContactHandler}
            key={contact.id} 
            />
        );
    });
    return(
        <div className="main">
            <h2>Contact List</h2>
           
            <div className=" ui celled list">   {renderContactList} </div>
        </div>
      
    );
}

export default ContactList;