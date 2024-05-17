import React, {useEffect , useState} from 'react';
import { useSelector , useDispatch} from "react-redux";
import { fetchContacts } from '../redux/contactList';


const ContactList = () => {
  const [limit , setLimit] = useState(5);
  const dispatch = useDispatch();
  const {totalContact} = useSelector((state => state.list));
  let search;

  useEffect(() => {
    dispatch(fetchContacts({page:1,limit:limit,search:search})) //fetching Data from DB
  }, [limit]);

  function limitChange(event){
    setLimit(event.target.value);
    console.log(event.target.value,'== limit');
  }

  return (
    <div className="main-heading">
    <div className="page">
      <h3>Contact List</h3>
      <div className="contactList">
        <select id="contactList" className="list-page" defaultValue='5' onChange={limitChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
      </select>
      <p>of <span className="totalContacts">{totalContact}</span></p>
      </div>
  </div>
  </div>
  )
}


export default ContactList;
