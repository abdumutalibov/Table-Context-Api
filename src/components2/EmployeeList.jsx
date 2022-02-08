import { useContext ,useState, useEffect } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import AddFrom from "./AddFrom";
import { EmployeeContext } from "./contexts/EmployeeContext";
import Employee from './Employee'
const EmployeeList = () => {

const [showAlert, setShowAlert]=useState(false)
const {employees} = useContext(EmployeeContext)
const {deleteEmployee} = useContext(EmployeeContext)

const [show, setShow]=useState(false)
const handleShow = () => setShow(true)
const handleClose =()=> setShow(false)

const [post , setPost]=useState('post')

const handleShowAlert =()=>{
  setShowAlert(true);
  setTimeout(()=>{
    setShowAlert(false)
  },2000)
}

useEffect(()=>{
  handleShowAlert();
},[employees])

useEffect(()=>{
  handleClose();
},[employees])
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} variant="success">Add New Epmloyess</Button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} variant="success">
        Employee List Updated Succefully !
      </Alert>
      
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {employees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>
            Add New Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddFrom/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
Close Button
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
};

export default EmployeeList;
