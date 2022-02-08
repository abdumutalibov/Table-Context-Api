import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';
import { EmployeeContext } from './contexts/EmployeeContext';
import Employee from './Employee';


const EmployeeList = () => {

  const {employees} =useContext(EmployeeContext)

  const [showAlert , setShowAlert] =useState(false)
  const [show , setShow] = useState(false)
  const handleShow =()=> setShow(true)
  const handleClose =()=> setShow(false)

const  handleShowAlert=()=>{
    setShowAlert(true);
    setTimeout(()=>{
      setShowAlert(false)
    },2000)

  }

  useEffect(()=>{
    handleShowAlert()
  },[employees])
  return (
  <>
  <div className='table-title'>
    <div className='row'>
      <div className='col-sm-6'>
        <h2>Manage <b>Employees</b></h2>
      </div>
      <div className='col-sm-6'>

      <Button onClick={handleShow} className='btn btn-success btn-act'>
        Add New Employee
      </Button>
      </div>
    </div>
  </div>
  <Alert show={showAlert} variant='success'>
    Employee List Updated Succefully !
  </Alert>
  <table className='table table-striped table-hover'>
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
 {
   employees.map((employee)=>(
     <tr key={employee.id}>
       <Employee employee={employee}/>
     </tr>
   ))
 }
    </tbody>
  </table>
  <Modal show={show}>
    <Modal.Header onClick={handleClose} closeButton>
      <Modal.Title>
        Add New Employee
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <AddForm/>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleClose}>
        Close Button 
      </Button>
    </Modal.Footer>
  </Modal>
  </>
    );
};

export default EmployeeList;
