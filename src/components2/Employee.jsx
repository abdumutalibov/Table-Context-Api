import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';
import EditFrom from './EditFrom';

const Employee = ({employee}) => {

  const {deleteEmployee}=useContext(EmployeeContext)
  const [show, setShow]=useState(false)
  const handleShow =()=>setShow(true)
  const handleClose =()=>setShow(false)
  return (
    <>
   
  <td>{employee.name}</td>
  <td>{employee.email}</td>
  <td>{employee.address}</td>
  <td>{employee.phone}</td>
  <td>
  <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
<button onClick={handleShow} className='btn text-warning btn-act'><i className='material-icons'>&#xE254;</i></button>
    </OverlayTrigger>
    <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
<button onClick={()=>deleteEmployee(employee.id)}  className='btn text-danger btn-act'><i className='material-icons'>&#xE872;</i></button>
    </OverlayTrigger>
  </td>
  <Modal show={show}>
    <Modal.Header onClick={handleClose} closeButton>
      <Modal.Title>
        Edit Employee
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <EditFrom theEmployee={employee}/>
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

export default Employee;
