import React from "react";
import ContactList from "./ContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormOpen,
  fetchContacts,
  setSearchText,
} from "../redux/contactList";

function Header() {
  const { contactLimit } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(setFormOpen(true));
  };

  async function search(event) {
    let value = event.target.value || undefined;
    dispatch(setSearchText(value));
    dispatch(fetchContacts({ page: 1, limit: contactLimit, search: value }));
  }

  return (
    <>
      <header className="container">
        <ContactList />

        <div className="list-head container">
        <button onClick={openForm} id="addEmployeeOpen">
          Add Contact
        </button>
      </div>

        <div className="search-bar">
          <div>
            <span className="material-symbols-outlined search-icon">
              search
            </span>
            <input
              onChange={search}
              id="search"
              type="search"
              placeholder="Search"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
