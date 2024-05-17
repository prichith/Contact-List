import avatar from '../image/avatar.png';
import { useEffect, useState } from 'react';
import { useSelector , useDispatch} from "react-redux";
import { setFormOpen , addContact , editContact ,setFormUpdate} from "../redux/contactList";

function Form(props){
  const [data , setData] = useState(props.state || {});
  const {formOpen} = useSelector((state => state.list));
  const {formUpdate} = useSelector((state => state.list));
  const dispatch = useDispatch();

  function toggleForm(){
    formOpen ? dispatch(setFormOpen(false)) : dispatch(setFormOpen(true));
    // props.updateState();
    setData({});
    dispatch(setFormUpdate(false));
  }

  useEffect(() => {
    setData(props.state || {}); 
  }, [props.state]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      place: event.target.place.value
    };

    try {
      if(!formUpdate){
        dispatch(addContact(formData));
      }else{
        dispatch(editContact({ formData, id: data._id }));
      }
      dispatch(setFormOpen(false)); //close form
      // props.updateState(); // reset the form
      setData({}); // reset the form
      dispatch(setFormUpdate(false));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function changeData(event) {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return(
        <div className="formContainer">
        <form className={`${formOpen ? 'flex' : null}`} onSubmit={handleSubmit}>
          <div className="formClose">
            <span onClick={toggleForm}><i className="fa-solid fa-xmark"></i></span>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar"/>
          </div>
          <input id="name" type="text" placeholder="Name" name="name" value={data.name || ''} onChange={changeData}/>
          <input id="email" type="email" placeholder="Email" name="email" value={data.email || ''} onChange={changeData} />
          <input id="phone" type="text" placeholder="Phone" name="phone" value={data.phone || ''} onChange={changeData}/>
          <input id="place" type="text" placeholder="Place" name="place" value={data.place || ''} onChange={changeData}/>
            {formUpdate ? <button id="addContact" >Update Contact</button> : <button id="addContact" >Add Contact</button> }
        </form>
      </div>
    )
}

export default Form;
