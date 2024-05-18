import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactList";

function DeleteConfirmation(props) {
  const dispatch = useDispatch();
  let display = props.state;
  let id = props.id;

  function deleteFormClose() {
    props.updateState(false);
  }
  function deleteContactByID() {
    dispatch(deleteContact(id));
    deleteFormClose();
  }

  return (
    <div
      id="deleteEmployeeForm"
      className={`DeleteFormContainer details deteteEmployee-width fadeIn ${
        display ? "block" : ""
      }`}
    >
      <div className="deleteEmployeeHead">
        <h3>Delete Contact</h3>
        <i
          onClick={deleteFormClose}
          id="deleteEmployeeClose"
          className="fa-solid fa-xmark"
        ></i>
      </div>
      <h6 className="delete-employee">
        Are you sure you want to delete this contact?
      </h6>
      <div className="buttonDiv">
        <div className="deleteFormButtons">
          <button
            onClick={deleteFormClose}
            id="deleteModalCancel"
            className=" order-unset button"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={deleteContactByID}
            id="deleteModalDelete"
            className="btn button delete-btn"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteConfirmation;
