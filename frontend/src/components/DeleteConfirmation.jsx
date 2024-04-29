function DeleteConfirmation(){
    return(
        <div id="deleteEmployeeForm" className="DeleteFormContainer details deteteEmployee-width fadeIn">
        <div className="deleteEmployeeHead">
            <h3>Delete Contact</h3>
            <i id="deleteEmployeeClose" className="fa-solid fa-xmark"></i>
        </div>
        <h6 className="delete-employee">Are you sure you want to delete this contact?</h6>                        
        <div className="buttonDiv">
            <div className="deleteFormButtons">
                <button id="deleteModalCancel" className=" order-unset button" type="button">Cancel</button>
                <button id="deleteModalDelete" className="btn button delete-btn" type="button">Delete</button>
            </div>
        </div>
    </div>
    )
}
export default DeleteConfirmation;