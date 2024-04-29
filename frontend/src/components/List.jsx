function List(){
    return(
        <ul className="listContainer">
        <li>
          <div className="details">
            <div><img src="https://avatars.githubusercontent.com/u/126453231?v=4" alt=""/></div>
            <div>
              <h4>Prichith C P</h4>
              <p>7907966194</p>
              <p>prichith@gmail.com</p>
            </div>
          </div>
          <div className="manage">
            <span className="edit"><i className="fa-solid fa-pen"></i></span>
            <span className="delete"><i className="fa-solid fa-trash"></i></span>
          </div>
        </li>
      </ul>
    )
}
export default List;