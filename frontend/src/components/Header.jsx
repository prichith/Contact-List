import ContactList from "./ContactList";

function Header(){
    return(
        <>
        <header className="container">
        <ContactList />
        <div className="search-bar">
          <div>
              <span className="material-symbols-outlined search-icon">search</span>
              <input onKeyUp="searchEmployee()" id="search" type="search" placeholder="Search" />
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