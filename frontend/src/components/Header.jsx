import React from 'react';
import ContactList from "./ContactList";
import { useDispatch } from "react-redux";
import { setFormOpen } from "../redux/contactList";

function Header(){
    const dispatch = useDispatch();

    const openForm = ()=>{
        dispatch(setFormOpen(true));
    }
    return(
        <>
        <header className="container">
        <ContactList />
        <div className="search-bar">
          <div>
              <span className="material-symbols-outlined search-icon">search</span>
              <input onKeyUp="searchEmployee()" id="search" type="search" placeholder="Search" />
          </div>
      </div>
      </header>

        <div className="list-head container">
            <button onClick={openForm} id="addEmployeeOpen">Add Contact</button>
            {/* <Link to="/form"><button id="addEmployeeOpen">Add Contact</button></Link> */}
        </div>
        </>
    )
}

export default Header;