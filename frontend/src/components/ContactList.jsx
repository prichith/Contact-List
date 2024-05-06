import React, {useEffect} from 'react'

let listNo;
const ContactList = () => {
useEffect(() => {
    // Access the DOM element after the component is mounted
    listNo = document.getElementById("contactList").value;
  }, []); 

  return (
    <div className="main-heading">
    <div className="page">
      <h3>Contact List</h3>
      <div className="contactList">
        <select id="contactList" className="list-page" defaultValue='5' >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {/* <option value="5" selected>5</option> */}
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
      </select>
      <p>of <span className="totalContacts">10</span></p>
      </div>
  </div>
  </div>
  )
}



export default ContactList;
export {listNo};
// exports.module = listNo;
