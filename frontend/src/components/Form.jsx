import avatar from '../image/avatar.png';
import axios from 'axios';
import { Link } from "react-router-dom";

function Form(){
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      place: event.target.place.value
    };

    try {
      await axios.post(
        "http://localhost:3002/contactlist",
        formData
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

    return(
        <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="formClose">
            <Link to='/'><span><i className="fa-solid fa-xmark"></i></span></Link>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar"/>
          </div>
          <input id="name" type="text" placeholder="Name" name="name"/>
          <input id="email" type="email" placeholder="Email" name="email" />
          <input id="phone" type="text" placeholder="Phone" name="phone"/>
          <input id="place" type="text" placeholder="Place" name="place"/>
          <button id="addContact">Add Contact</button>
        </form>
      </div>
    )
}

export default Form;

