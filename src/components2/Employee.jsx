import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';

const Employee = ({employee}) => {

  const {deleteEmployee} =useContext(EmployeeContext)
  return (
  <>
  
<td>{employee.name}</td>
  <td>{employee.email}</td>
  <td>{employee.address}</td>
  <td>{employee.phone}</td>
  <td>
    <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
       <button className='btn text-warning btn-act'>
    <i className='material-icons'>&#xE254;</i>

    </button>
    </OverlayTrigger>
   <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}> Delete</Tooltip>}>
<button onClick={() => deleteEmployee(employee.id)} className='btn text-danger btn-act'>

    <i className='material-icons'>&#xE872;</i>
</button>
   </OverlayTrigger>
  </td>
  </>
    );
};

export default Employee;
