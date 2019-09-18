import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import OrderForm from './components/Orderform';
import Routes from './config/routes';
import Nav from './components/Nav';


function App() {
  return (
    <div >
      
      <Router><Nav/><Routes/></Router>
      
    </div>
  );
}

export default App; 

