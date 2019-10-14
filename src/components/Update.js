import React, { Component } from "react";
import { SHIRT_API } from '../config/coms'
// import Orderitems from './Orderitems'
// import { Link } from "react-router-dom"


class Update extends Component {
    constructor(props) {
        super(props);
        console.log('update props',props)
       
    }
        state = {
            firstName: this.props.location.state.info.firstName,
            lastName: this.props.location.state.info.lasttName,
            email: this.props.location.state.info.eamil,
            phone: this.props.location.state.info.phone,  
            mailingAddress: this.props.location.state.info.mailingAddress,
            city: this.props.location.state.info.city,
            state: this.props.location.state.info.state,
            zipCode: this.props.location.state.info.zipCode,
            payment: this.props.location.state.info.payment,
            items: this.props.location.state.info.items
        };

    handleChange = ({ target }) => {
        this.setState( { [target.name]: target.defaultValue } );
      };

      handleSubmit = async event => { 
        console.log(JSON.stringify(this.state));
        
        event.preventDefault();
        const body = this.state
        await fetch(`${SHIRT_API}/${this.props.location.state.info._id}`, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
        alert(this.state.firstName)
  
      }
    
    render() {
         return(
             <div>
                 <h1>Update</h1>
                <form className="flexbox" onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={this.handleChange}
                defaultValue={this.state.firstName}
                // required
              />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                defaultValue={this.state.lastName}
                // required
              />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                defaultValue={this.state.email}
                // required
              />
              <input
                type="text"
                placeholder="Address"
                name="mailingAddress"
                onChange={this.handleChange}
                defaultValue={this.state.mailingAddress}
                // required
              />
                <input
                type="text"
                placeholder="City"
                name="city"
                onChange={this.handleChange}
                defaultValue={this.state.city}
                // required
              />
                <input
                type="text"
                placeholder="State"
                name="state"
                onChange={this.handleChange}
                defaultValue={this.state.state}
                // required
              />
                <input
                type="number"
                placeholder="Zip Code"
                name="zipCode"
                onChange={this.handleChange}
                defaultValue={this.state.zipCode}
                // required
              />
            <input
                type="tel"
                placeholder="Phone"
                name="phone"
                onChange={this.handleChange}
                defaultValue={this.state.phone}
                // required
              />
            <input
                type="text"
                placeholder="Payment"
                name="payment"
                onChange={this.handleChange}
                defaultValue={this.state.payment}
                // required
              />
            <input
                type="text"
                placeholder="Items"
                name="items"
                onChange={this.handleChange}
                defaultValue={this.state.items}
                // required
              />  
              <br/>            
              <button className="button" type="submit">Update</button>
            </form>

             </div>
         )
    }
}


export default Update;
