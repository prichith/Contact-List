
function Header(){
    return(
        <>
        <header className="container">
        <div className="main-heading">
          <div className="page">
            <h3>Contact List</h3>
            <div className="contactList">
              <select id="employeeList" className="list-page">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5" selected>5</option>
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
        <div className="search-bar">
          <div>
              <span className="material-symbols-outlined search-icon">search</span>
              <input onkeyup="searchEmployee()" id="search" type="search" placeholder="Search" />
          </div>
      </div>
      </header>

        <div className="list-head container">
            <button id="addEmployeeOpen">Add Contact</button>
        </div>
        </>
    )
}

export default Header;