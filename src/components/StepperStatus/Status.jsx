import React, { Component } from "react";
import { Steps } from 'antd';
import { render } from 'react-dom';
import './Status.css'
const { Step } = Steps;
export default class Stepper extends React.Component{
  constructor(props){
      super(props)
      this.state={name:""}
  }  

render(){

return(
    <div>
    <div className="status_bar_container">    
 <div className="satus_container"><label>Order Approved</label><label>Packed</label><label>Out for Delivery</label><label>Expected Delivery</label><label>Delivered</label></div>
 <div>
  <Steps current={1} progressDot>
    
    <Step title="Finished" description="This is a description" icon={"yhh"}/>
    <Step title="Finished" description="This is a description"/>
    <Step title="Finished" description="This is a description"/>
    <Step title="Finished" description="This is a description"/>
    <Step title="Finished" description="This is a description"/>
  </Steps>
  </div>
  {/* <div className="timesatus_container">
      <div><label>08 Dec 2020</label><p>10.00AM</p></div>
      <div><label>08 Dec 2020</label><p>10.00AM</p></div>
      <div><label>08 Dec 2020</label><p>10.00AM</p></div>
      <div><label>08 Dec 2020</label><p>10.00AM</p></div>
      <div><label>08 Dec 2020</label><p>10.00AM</p></div>
 </div> */}
  </div>
  </div>
)
}
}
