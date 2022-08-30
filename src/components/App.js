import React, {useState,useEffect} from "react";
import {v4} from 'uuid';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App()
{

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact) =>{
  console.log(contact)
    setContacts([...contacts,{id: v4(), ...contact}]);
  };

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;

    });

    setContacts(newContactList);
  }

  useEffect(()=>{
   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrieveContacts) setContacts(retrieveContacts);
   
  }, []);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      
       <Header />
      
      {/* <BrowserRouter>
      <Routes>

      <Route path="/" 
      render={(props)=>(<ContactList {...props} contacts={contacts} getContactId={ removeContactHandler} /> )} />
      <Route path="/add" 
       render={(props)=>( <AddContact {...props} addContactHandler={addContactHandler} />) }
        />
      </Routes>
      </BrowserRouter> */}

      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={ removeContactHandler} />
    
    </div>
  );

}


export default App;
