import React from 'react';
// import {Link} from "react-router-dom";

import '../App.css';

class Home extends React.Component{
render(){
  return (
    <div className="App" id="font">
          <br></br>
          <h1>Get Your Flowing Freeride Shirt Today</h1>
          <div>
          <img src={require("./ffrvinylstickers-04.jpg")} alt="ffr logo" style={{ height: "270px" }}/>
          <br/>
            <img src={require("./Black Shirt FFR Logo.png")} alt="Blackffrshirt" style={{ height: "430px" }}/>
            <img src={require("./WhiteShirtSmFFRLogo.png")} alt="Whiteffrshirt" style={{ height: "530px" }}/>
            <img src={require("./GreenShirtFFRLogo.png")} alt="Greenffrshirt" style={{ height: "430px" }}/>
          </div>
          </div>
          
          
          );
}
}
          export default Home;