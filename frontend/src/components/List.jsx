import React from 'react'
import { useSelector , useDispatch} from "react-redux";
import DeleteConfirmation from './DeleteConfirmation';
import Form from './Form';
import { useState , useEffect } from 'react';
import { fetchContacts } from "../redux/contactList";
import { setFormOpen } from "../redux/contactList";
import { setFormUpdate } from "../redux/contactList";



function List() {
  const [deleteForm ,setDeleteForm] = useState(false);
  const [deleteID , setDeleteID] = useState();
  const [form , setForm] = useState();
  const {contactList} = useSelector((state => state.list));

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchContacts());
  }, [])

  function edit(contact){
    // console.log(contact,'== contact');
    setForm(contact);
    dispatch(setFormOpen(true));
    dispatch(setFormUpdate(true));

  }
  // console.log(form,'== state');
  function deleteList(id){
    // (deleteContact(id));  
    deleteForm===true ? setDeleteForm(false) : setDeleteForm(true);
    setDeleteID(id);
    // setDeleteForm(true);
  }

  return (
    <>
    <ul className="listContainer">
      {contactList.map((contact) => (
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
            <span className="edit" onClick={()=> edit(contact)}>
              <i className="fa-solid fa-pen"></i>
            </span>
            <span className="delete" onClick={()=> deleteList(contact._id)}>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
        </li>
      ))}
    </ul>
    <DeleteConfirmation state={deleteForm} updateState={setDeleteForm} id={deleteID}/>
    <Form state={form} updateState={setForm}/>
    </>
  );
}

export default List;
