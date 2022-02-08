import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';

const EditFrom = ({theEmployee}) => {

  const id = theEmployee.id;

  const [name, setName] =useState(theEmployee.name)

  const {updateEmployee} =useContext(EmployeeContext);

  const updatedEmployee ={id, name}

  const handleSubmit=(e)=>{
    e.preventDefault();
    updateEmployee(id,updatedEmployee)
  }





  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Control
      type='text'
      placeholder='Name'
      name='name'
      required
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
    </Form.Group>
    <Button type='submit'>
Edit Employee
    </Button>
  </Form>
    );
};

export default EditFrom;
