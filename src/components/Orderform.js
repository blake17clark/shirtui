import React, { Component } from "react";
import { SHIRT_API } from '../config/coms'


class OrderForm extends Component {
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
        items: ""
    };
        
    //   State is an object that holds key values pairs example key-lastName & value-Clark 
   // objects are represented by {}
  


    handleSubmit = async event => { 
      console.log(JSON.stringify(this.state));
      
      event.preventDefault();                   // this prevents the page from refreshing when I submit
      const body = this.state
      await fetch(`${SHIRT_API}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })
      await alert(`Thank You For Your Order. Please Review These Details Are Correct ${this.state.firstName} ${this.state.lastName}`)
        await window.location.reload()   // accessing window object and calling it to reloads site.   Side effects- networklog for post/anything disappears, or could run function that clears our state- this.setState 
    }


    handleChange = ({ target }) => {
        this.setState( { [target.name]: target.value } );     // takes in targe paramater then calling setState to update the specific value assiocated with value in the input used
      };

    render() {
        const title = "Place Orders Here"
        // const willDirect = this.state.redirect
        return (
            <fieldset className="center">
            <legend>{title}</legend>
            <form className="flexbox" onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={this.handleChange}
                //required
              />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                //required
              />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                //required
              />
              <input
                type="text"
                placeholder="Address"
                name="mailingAddress"
                onChange={this.handleChange}
                //required
              />
                <input
                type="text"
                placeholder="City"
                name="city"
                onChange={this.handleChange}
                //required
              />
                <input
                type="text"
                placeholder="State"
                name="state"
                onChange={this.handleChange}
                //required
              />
                <input
                type="number"
                placeholder="Zip Code"
                name="zipCode"
                onChange={this.handleChange}
                //required
              />
            <input
                type="tel"
                placeholder="Phone"
                name="phone"
                onChange={this.handleChange}
                //required
              />
            <input
                type="text"
                placeholder="Payment"
                name="payment"
                onChange={this.handleChange}
                //required
              />
            <input
                type="text"
                placeholder="Items"
                name="items"
                onChange={this.handleChange}
                //required
              />  
              <br/>            
              <button className="button" type="submit">Submit</button>
            </form>
            <img src={require("./ffrvinylstickers-04.jpg")} alt="ffr" style={{ height: "430px" }}/>
   

            </fieldset>
            
            
        )
    }

}
export default OrderForm;
