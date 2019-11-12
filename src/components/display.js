import React, { Component } from "react";       // { variable is being deconstructed } is why we use {} from is like = so from = react
// import {Redirect} from 'react-router-dom'
import { SHIRT_API } from '../config/coms'
// import { thisTypeAnnotation, classBody } from "@babel/types";
import Orderitems from './Orderitems'
// const ObjectId = require("mongodb").ObjectId;


class Orders extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",  
        mailingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        payment: "",
        items: "",

        testing: []     // to see that the components were mapped properly

    }
    componentDidMount () {
        this.reget() 
        // fetch(`${SHIRT_API}/orders`)
        // .then(response => response.json())
        // .then(data => 
        //     data.map(jsonItem => (
        //         <Orderitems orderData={jsonItem} deleteIt={this.remove} reloadIt={this.reload}/>
        //     ))
        // ).then(components => this.setState({testing: components }))
        // .catch(console.log);
        // this.setState ({
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     email: data.email,
        //     phone: data.phone,  
        //     mailingAddress: data.mailingAddress,
        //     city: data.city,
        //     state: data.state,
        //     zipCode: data.zipCode,
        //     payment: data.payment,
        //     items: data.items
        // })   

        // going to need to define body as the id from the api. Single elements ID how do I get the ID into


        
    }

    reget = () => {
        fetch(`${SHIRT_API}/orders`)
        .then(response => response.json())
        .then(data => 
            data.map(jsonItem => (
                <Orderitems key={jsonItem._id} orderData={jsonItem} deleteIt={this.remove}/>    //asigning properties
            ))
        ).then(components => this.setState({testing: components }))
        .catch(err => console.log("err", err));
       
    }

    remove = (incomingID) => {
        console.log(this);
        console.log(incomingID);
        const body = {};
        fetch(`${SHIRT_API}/${incomingID}`, {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(()=>this.reget() )
        //console.log(this);
       // window.location.reload()                //get request try to package up in a component 
       
        console.log("Did Delete")
    }
    render() {
        console.log("here");
        // if(!init) {
        //     this.state.test
        // }
        return(
            <div className="center">
               <h1>Order Information</h1>
               <div ><img src={require("./ffrvinylstickers-04.jpg")} alt="ffr logo" style={{ height: "230px" }}/></div>

               <div>{this.state.testing}</div>
               <br></br>
               <br></br>

            </div>
        )
    }
}




export default Orders;