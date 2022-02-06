import { useState , useContext} from "react";
import { Alert, Button } from "react-bootstrap";
import Employee from "./Employee";
import {v4 as uuidv4} from 'uuid';

import { EmployeeContexts } from "./contexts/EmployeeContext";
const EmployeeList = () => {

  const {employees} =useContext(EmployeeContexts)

  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Emploees</b>
            </h2>
          </div>
          <div className="col-sm-6">
          <Button
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} variant="success">
        Emploees List Update Succefull !
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
    </>
  );
};

export default EmployeeList;
