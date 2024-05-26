import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  setContactLimit,
  setContactsPerPage,
} from "../redux/contactList";

const limitOptions = Array.from({ length: 10 }, (_, i) => i + 1);

const ContactList = () => {
  const [limit, setLimit] = useState(5);
  const dispatch = useDispatch();
  const { totalContact,searchText,contactLimit,contactsPerPage } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchContacts({ page: 1, limit, search: searchText })).then(
      (result) => {
        const newLimit = result.payload.limit;
        dispatch(setContactsPerPage(newLimit));
      }
    );
  }, [limit, searchText]);

  function limitChange(event) {
    setLimit(event.target.value);
    let limit = event.target.value;
    dispatch(setContactLimit(limit));
  }

  return (
    <div className="main-heading">
      <div className="page">
        <h3>Contact List</h3>
        <div className="contactList">
          <select
            id="contactList"
            className="list-page"
            value={contactLimit}
            onChange={limitChange}
          >
            {limitOptions
              .filter((value) => value <= totalContact)
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
          <p>
            <span className="totalContacts">{contactsPerPage}</span>
             of <span className="totalContacts">{totalContact}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
