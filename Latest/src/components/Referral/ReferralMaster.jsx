import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import ReferralDetails from "../Referral/ReferralDetails"

class ReferralMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr"
    };
  }

  render() {
   
    return (
      <div className="deal_listcreatead">
          <Paper>
          <div className="uploadsmasterheader">
          <div className="titleuser">REFERRAL</div>
  
          </div>
         
          </Paper>
          <ReferralDetails />
          </div>
      
    );
  }
}

export default ReferralMaster;
