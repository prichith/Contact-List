// import { useEffect, useState } from "react";

// function List() {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3002/contactlist")
//       .then((data) => data.json())
//       .then((result) => setList(result));
//   }, []);

//   const data = list.map((contact) => {
//     <li>
//       <div className="details">
//         <div>
//           <img
//             src="https://avatars.githubusercontent.com/u/126453231?v=4"
//             alt=""
//           />
//         </div>
//         <div>
//           <h4>{contact.name}</h4>
//           <p>{contact.email}</p>
//           <p>{contact.place}</p>
//         </div>
//       </div>
//       <div className="manage">
//         <span className="edit">
//           <i className="fa-solid fa-pen"></i>
//         </span>
//         <span className="delete">
//           <i className="fa-solid fa-trash"></i>
//         </span>
//       </div>
//     </li>;
//   });
//   return (
//     <ul className="listContainer">
//       {data}

//     </ul>
//   );
// }
// export default List;

import { useEffect, useState } from "react";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/contactlist")
      .then((data) => data.json())
      .then((result) => setList(result));
  }, []);

  const data = list.map((contact) => (
    <li key={contact.id}>
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
        <span className="edit">
          <i className="fa-solid fa-pen"></i>
        </span>
        <span className="delete">
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </li>
  ));

  return <ul className="listContainer">{data}</ul>;
}

export default List;
