import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Create from './components/create';
import Update from './components/update';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Employees from './components/employees';


function App() {
  return (
        <div className='main'>
          <h2 className='main-header'>Log In</h2>
          <BrowserRouter>
          <Routes>
            <Route path = "/" component = {App}>
              <Route path = "create" component = {Create} />
              <Route path = "employees" component = {Employees} />
              <Route path = "update" component = {Update} />
            </Route>
          </Routes>
          </BrowserRouter>
        </div>
  );
  
}

export default App;
