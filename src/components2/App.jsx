import React from 'react';
import EmployeeList from './EmployeeList';
import AddForm from './AddFrom'
import EmployeeContextProvider from './contexts/EmployeeContext'
function App() {
  return (
  <div className='container-xl'>
  <div className='table-responsive'>
    <div className='table-wrapper'>
<EmployeeContextProvider>

      <EmployeeList/>
</EmployeeContextProvider>
    </div>
  </div>
  </div>
  
    );
}

export default App;
