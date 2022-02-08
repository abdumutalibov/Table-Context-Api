
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';



const EditFrom = ({theEmployee}) => {

const id = theEmployee.id;

const [name, setName] =useState(theEmployee.name);
const [email, setEmail] =useState(theEmployee.email);
const [address, setAddress] =useState(theEmployee.address);
const [phone, setPhone] =useState(theEmployee.phone);

const {updateEmployee}= useContext(EmployeeContext)

const updatedEmployee = {id, name, email, address, phone}

const handleSubmit =(e)=>{
    e.preventDefault();
    updateEmployee(id, updatedEmployee)
}

  return (
  <Form onSubmit={handleSubmit}>
<Form.Group>
    <Form.Control
    type='text'
    placeholder='name'
    name='name'
    value={name}
    required
    onChange={(e)=> setName(e.target.value)}
    />
</Form.Group>
<Button type='submit'>
Edit Employe
</Button>
  </Form>
    );
};

export default EditFrom;
