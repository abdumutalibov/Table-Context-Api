import React from 'react';
import { useState, useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';

const AddFrom = () => {

const {addEmployee} =useContext(EmployeeContext);

const [newEmployee, setNewEmployee] =useState({
  name:"", email:"" ,address:"", phone:""
});

const onInputChange =(e)=>{
  setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
}

const {name, email, address, phone}=newEmployee;

const handleSubmit=(e)=>{
  e.preventDefault();
  addEmployee(name, email, address, phone)
}

  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Control
      type='text'
      placeholder='Name'
      name='name'
      value={name}
      required
      onChange={onInputChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control
      type='email'
      placeholder='Email'
      name='email'
      value={email}
      required
      onChange={onInputChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control
      type='address'
      placeholder='Address'
      value={address}
      name='address'
      required
      onChange={onInputChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control
      type='phone'
      placeholder='Phone'
      value={phone}
      name='phone'
      required
      onChange={onInputChange}
      />
    </Form.Group>
    <Button type='submit' variant='success'>
      Add New Employee
    </Button>
  </Form>
    );
};

export default AddFrom;
