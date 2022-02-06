import React from "react";

const Employee = ({ employee }) => {
  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <i className="material-icons">&#xE254;</i>
        <i className="material-icons">&#xE872;</i>
      </td>
    </>
  );
};

export default Employee;
