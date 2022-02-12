import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeContextProvider from './contexts/EmployeeContext'
import {Toaster} from 'react-hot-toast'

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
    <Toaster 
  position='bottom-right'
  toastOptions={{
style:{
  fontSize: '1.4rem',
}
  }}/>
  </div>
  
    );
}

export default App;
