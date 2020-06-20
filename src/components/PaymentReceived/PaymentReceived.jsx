import React, { Component } from "react";
import Logo from '../../images/Logo.png'
import Okay from '../../images/success.svg'
import "./PaymentReceived.css";

export default class PaymentReceived extends Component{
    render(){
        return(
            <div>
                <div className="payment">
                <div className="receive_msg"><img  src={Logo} className="payment_logo" ></img></div>
                <div className="receive_msg"><img src={Okay}  className="okay"></img></div>
                <div><h4 className="payment_received">Payment Received</h4></div>
                <div className="receive_msg">Thank you, Your payment has been</div>
                <div className="receive_msg"> successfull. A conformation email has been</div>
                <div className="receive_msg">sent to</div>
               
                <div className="receive_msg"><h4 className="email">Khadija@gmail.com</h4></div>
            </div>
            </div>
         
        )
    }
}