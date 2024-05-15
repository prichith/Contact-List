import React from 'react'
import { useSelector , useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import DeleteConfirmation from './DeleteConfirmation';
import Form from './Form';
import { useState , useEffect } from 'react';
import { fetchContacts } from "../redux/contactList";


function List() {
  const [deleteForm ,setDeleteForm] = useState(false);
  const [form , setForm] = useState({});
  const [deleteID , setDeleteID] = useState();
  const [editID , setEditID] = useState();
  const {contactList} = useSelector((state => state.list));
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchContacts());
  }, [])

// console.log(deleteForm);
  function edit(contact){
    console.log(contact,'== contact');
    // dispatch(setFormOpen());  
    setForm(contact);
  }
  console.log(form,'== state');
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
            {/* <Link to={`/form/${contact._id}`} > */}
            <span className="edit" onClick={()=> edit(contact)}>
              <i className="fa-solid fa-pen"></i>
            </span>
            {/* </Link> */}
            <span className="delete" onClick={()=> deleteList(contact._id)}>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
        </li>
      ))}
    </ul>
    <DeleteConfirmation state={deleteForm} updateState={setDeleteForm} id={deleteID}/>
    <Form state={form} updateState={setEditID} id={editID} />
    </>
  );
}

export default List;
