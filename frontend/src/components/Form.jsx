function Form(){
    return(
        <div className="formContainer">
        <form action="">
          <div className="formClose">
            <span><i className="fa-solid fa-xmark"></i></span>
          </div>
          <div className="avatar">
            <img src="../image/avatar.png" alt="avatar"/>
          </div>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Phone"/>
          <input type="text" placeholder="Place"/>
          <button id="addContact">Add Contact</button>
        </form>
      </div>
    )
}

export default Form;