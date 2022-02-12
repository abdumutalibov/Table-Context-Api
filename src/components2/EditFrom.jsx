import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from './contexts/EmployeeContext';
import toast from 'react-hot-toast';

const EditFrom = ({theEmployee}) => {

  const id = theEmployee.id;

  const [name, setName] =useState(theEmployee.name)
  const [email, setEmail] =useState(theEmployee.email)
  const [address, setAddress] =useState(theEmployee.address)
  const [phone, setPhone] =useState(theEmployee.phone)

  const {updateEmployee} =useContext(EmployeeContext);

  const updatedEmployee ={id, name, email,address,phone}

  const handleSubmit=(e)=>{
    e.preventDefault();
    updateEmployee(id,updatedEmployee)
 toast.success('Edit Successfully');

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
    <Form.Group>
      <Form.Control
      type='email'
      placeholder='Email *'
      name='email'
      required
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control
    as="textarea"
      placeholder='Address'
      name='address'
      required
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
    </Form.Group>
    <Form.Group>
      <Form.Control
      type='phone'
      placeholder='Phone *'
      name='phone'
      required
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      />
    </Form.Group>
    <Button type='submit'>
Edit Employee
    </Button>
  </Form>
    );
};

export default EditFrom;
