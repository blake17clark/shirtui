import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import { tsConstructorType } from "@babel/types";
import { Link } from "react-router-dom"

class Orderitems extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.deleteIt(this.props.orderData._id)
        //this.props.reloadIt();
    }

    reload = () => {
        console.log("this is this");
    }

    render() {

        return(
            <div>
                <div>{this.props.orderData.firstName}</div>
                <div>{this.props.orderData.lastName}</div>
                <div>{this.props.orderData.email}</div>
                <div>{this.props.orderData.phone}</div>
                <div>{this.props.orderData.mailingAddress}</div>
                <div>{this.props.orderData.city}</div>
                <div>{this.props.orderData.state}</div>
                <div>{this.props.orderData.zipCode}</div>
                <div>{this.props.orderData.payment}</div>
                <div>{this.props.orderData.items}</div>
                <div>{this.props.orderData._id}</div>
                <button onClick={this.handleClick}>Delete</button>
                <Link to={{ pathname: "/update", state: {
                    info: this.props.orderData
                }}} > Update
                </Link>
            </div>

        )   
    }
}
export default Orderitems

