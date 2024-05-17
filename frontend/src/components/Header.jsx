import React from 'react';
import ContactList from "./ContactList";
import { useDispatch } from "react-redux";
import { setFormOpen ,fetchContacts} from "../redux/contactList";
import { useState } from 'react';


function Header(){
    const [text , setText] = useState();
    const dispatch = useDispatch();

    const openForm = ()=>{
        dispatch(setFormOpen(true));
    }

    async function search(event){
        // let result = await setText(event.target.value);
        let result = await setText(event.target.value);
        dispatch(fetchContacts({page:1,limit:5,search:text}));
    }

    return(
        <>
        <header className="container">
        <ContactList />
        <div className="search-bar">
          <div>
              <span className="material-symbols-outlined search-icon">search</span>
              <input onChange={search} id="search" type="search" placeholder="Search" />
          </div>
      </div>
      </header>

        <div className="list-head container">
            <button onClick={openForm} id="addEmployeeOpen">Add Contact</button>
        </div>
        </>
    )
}

export default Header;