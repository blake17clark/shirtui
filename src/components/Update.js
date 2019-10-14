import React, { Component } from "react";
import { SHIRT_API } from '../config/coms'
// import Orderitems from './Orderitems'
// import { Link } from "react-router-dom"
// import { withRouter } from 'react-router'


class Update extends Component {
    constructor(props) {
        super(props);
        console.log('update props',props)
       
    
        // this.state = {
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     phone: "", 
        //     mailingAddress: "",
        //     city: "",
        //     state: "",
        //     zipCode: "",
        //     payment: "",
        //     items: ""
        // };
        this.state = {
            firstName: this.props.location.state.info.firstName,
            lastName: this.props.location.state.info.lastName,
            email: this.props.location.state.info.email,
            phone: this.props.location.state.info.phone,  
            mailingAddress: this.props.location.state.info.mailingAddress,
            city: this.props.location.state.info.city,
            state: this.props.location.state.info.state,
            zipCode: this.props.location.state.info.zipCode,
            payment: this.props.location.state.info.payment,
            items: this.props.location.state.info.items
        };
      }
      
    handleChange = ({ target }) => {
        this.setState( { [target.name]: target.value } );
      };

      handleSubmit = async event => { 
        console.log(JSON.stringify(this.state));
        
        event.preventDefault();
        const body = this.state
        console.log('body',body)
        await fetch(`${SHIRT_API}/${this.props.location.state.info._id}`, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        })
        alert(this.state.firstName)
        // const { router } = this.props
        await window.location.replace('/orders')
  
      }
    componentDidMount(){
      console.log('this.state', this.state)
      console.log('this.props',this.props.location.state.info)
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
                value={this.state.firstName}
                // required
              />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
                // required
              />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                // required
              />
              <input
                type="text"
                placeholder="Address"
                name="mailingAddress"
                onChange={this.handleChange}
                value={this.state.mailingAddress}
                // required
              />
                <input
                type="text"
                placeholder="City"
                name="city"
                onChange={this.handleChange}
                value={this.state.city}
                // required
              />
                <input
                type="text"
                placeholder="State"
                name="state"
                onChange={this.handleChange}
                value={this.state.state}
                // required
              />
                <input
                type="number"
                placeholder="Zip Code"
                name="zipCode"
                onChange={this.handleChange}
                value={this.state.zipCode}
                // required
              />
            <input
                type="tel"
                placeholder="Phone"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                // required
              />
            <input
                type="text"
                placeholder="Payment"
                name="payment"
                onChange={this.handleChange}
                value={this.state.payment}
                // required
              />
            <input
                type="text"
                placeholder="Items"
                name="items"
                onChange={this.handleChange}
                value={this.state.items}
                // required
              />  
              <br/>            
              <button className="button" type="submit">Update</button>
            </form>

             </div>
         )
    }
}

// export default withRouter(Update);
export default Update;
