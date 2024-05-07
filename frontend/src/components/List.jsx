
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);

  function edit(id){
    console.log(id); 
  }


  useEffect(() => {
    fetch("http://localhost:3002/contactlist")
      .then((data) => data.json())
      .then((result) => setList(result));
  }, []);

  const data = list.map((contact) => (
    <li key={contact._id}>
      <div className="details">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/126453231?v=4"
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
        <Link to="/form">
        <span className="edit" onClick={() => edit(contact._id)}>
          <i className="fa-solid fa-pen"></i>
        </span>
        </Link>
        <span className="delete">
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </li>
  ));

  return <ul className="listContainer">{data}</ul>;
}

export default List;
