import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';

const AddForm = () => {

  const {addEmployee} =useContext(EmployeeContext)

  const [newEmployes, setEmployee]=useState(
    {name:"" ,email:"", address:"", phone:""}
  )
const onInputChange=(e)=>{
 
  setEmployee({...newEmployes,[e.target.name]: e.target.value})
}

const {name, email, address, phone} =newEmployes;

const handleSubmit=(e)=>{
 e.preventDefault()
 addEmployee(name, email, address, phone)
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
      onChange={onInputChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control 
      type='email'
      placeholder='Email'
      name='email'
      required
      value={email}
      onChange={onInputChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control 
      as ='textarea'
      placeholder='Address'
      name='address'
      required
      value={address}
      onChange={onInputChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control 
      type='phone'
      placeholder='Phone'
      name='phone'
      required
      value={phone}
      onChange={onInputChange}
      />
    </Form.Group>
    <Button type='submit'>
      Add New Employee
    </Button>
  </Form>
    );
};

export default AddForm;
