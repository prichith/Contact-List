import avatar from '../image/avatar.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link , useParams , Redirect} from "react-router-dom";


function Form(){
  const [data , setData] = useState([]);
  const id = useParams().id;
  // const history = useHistory();
  // const shouldRedirect = true;

  // function redirect(){
  //   if (shouldRedirect) {
  //     return <Redirect to="/" />;
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      place: event.target.place.value
    };

    try {
      if(!id){
      await axios.post(
        "http://localhost:3002/contactlist",
        formData
      );        
      }else{
        await axios.put(
          `http://localhost:3002/contactlist/${id}`,
          formData
        );   
      }
      // history.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function filledForm() {
    try {
      const response = await axios.get(`http://localhost:3002/contactlist/${id}`);
      const data = response.data;
      setData(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error; 
    }
  }
  useEffect(() => {
   filledForm()
  }, [])
  
  function changeData(event) {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

    return(
        <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="formClose">
            <Link to='/'><span><i className="fa-solid fa-xmark"></i></span></Link>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar"/>
          </div>
          <input id="name" type="text" placeholder="Name" name="name" value={data.name} onChange={changeData}/>
          <input id="email" type="email" placeholder="Email" name="email" value={data.email} onChange={changeData} />
          <input id="phone" type="text" placeholder="Phone" name="phone" value={data.phone} onChange={changeData}/>
          <input id="place" type="text" placeholder="Place" name="place" value={data.place} onChange={changeData}/>
            {id ? <button id="addContact" >Update Contact</button> : <button id="addContact" >Add Contact</button> }
            {/* {data ? <button id="addContact" onClick={redirect}>Update Contact</button> : <button id="addContact" onClick={redirect}>Add Contact</button> } */}
        </form>
      </div>
    )
}

export default Form;

