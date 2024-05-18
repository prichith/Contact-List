import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteConfirmation from "./DeleteConfirmation";
import Form from "./Form";
import avatar from "../image/avatar.png";
import {
  fetchContacts,
  setFormOpen,
  setFormUpdate,
} from "../redux/contactList";

function List() {
  const [deleteForm, setDeleteForm] = useState(false);
  const [deleteID, setDeleteID] = useState();
  const [form, setForm] = useState();
  const { contactList } = useSelector((state) => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  function edit(contact) {
    setForm(contact);
    dispatch(setFormOpen(true));
    dispatch(setFormUpdate(true));
  }
  function deleteList(id) {
    deleteForm === true ? setDeleteForm(false) : setDeleteForm(true);
    setDeleteID(id);
  }

  return (
    <>
      <ul className="listContainer">
        {contactList &&
          contactList.map((contact) => (
            <li key={contact._id}>
              <div className="details">
                <div>
                  <img
                    src={avatar}
                    alt=""
                  />
                </div>
                <div>
                  <h4>{contact.name}</h4>
                  <p>{contact.email}</p>
                  <p>{contact.place}</p>
                </div>
              </div>
              <div className="manage">
                <span className="edit" onClick={() => edit(contact)}>
                  <i className="fa-solid fa-pen"></i>
                </span>
                <span
                  className="delete"
                  onClick={() => deleteList(contact._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            </li>
          ))}
      </ul>
      <DeleteConfirmation
        state={deleteForm}
        updateState={setDeleteForm}
        id={deleteID}
      />
      <Form state={form} updateState={setForm} />
    </>
  );
}

export default List;
