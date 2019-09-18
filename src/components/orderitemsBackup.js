import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import { tsConstructorType } from "@babel/types";

const Orderitems = ({orderData, deleteIt}) => {
    return(
        <div>
            <div>{orderData.firstName}</div>
            <div>{orderData.lastName}</div>
            <div>{orderData.email}</div>
            <div>{orderData.phone}</div>
            <div>{orderData.mailingAddress}</div>
            <div>{orderData.city}</div>
            <div>{orderData.state}</div>
            <div>{orderData.zipCode}</div>
            <div>{orderData.payment}</div>
            <div>{orderData.items}</div>
            <div>{orderData._id}</div>
            <button onClick={deleteIt}>Delete</button>
        </div>

    )
}
export default Orderitems