import React from 'react';
import {Link} from "react-router-dom";



class Nav extends React.Component{
render(){
  return (
        <div className="topnav" id="myTopnav">     
          <Link to="/">Home</Link>

          <Link to="/orderform">Orderform</Link>

          <Link to="/orders">Orders</Link>
          </div>
          // creating links to the path that renders various components. Link component is changing url to match path
         

          
          );
}
}
          export default Nav;