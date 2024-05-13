import React from 'react'
// import axios from "axios";

function List() {

  return (
    <ul className="listContainer">
      {contacts.map((contact) => (
        <li key={contact._id}>
          <div className="details">
            <div>
              <img src="https://avatars.githubusercontent.com/u/126453231?v=4" alt="" />
            </div>
            <div>
              <h4>{contact.name}</h4>
              <p>{contact.email}</p>
              <p>{contact.place}</p>
            </div>
          </div>
          <div className="manage">
            <span className="edit" onClick="">
              <i className="fa-solid fa-pen"></i>
            </span>
            <span className="delete">
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
