import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import './CancelSlotMaster.css'
import Moment from "react-moment";
import { Input } from "antd";
import Button from '@material-ui/core/Button';
import Plus from '../../images/plus.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dateFormat from 'dateformat';
import Labelbox from "../../helpers/labelbox/labelbox";
import Paper from "@material-ui/core/Paper";
import CancelSlotDetails from './CancelSlotDetails';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

class CancelSlotMaster extends Component {
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
          <div className="titleuser">CANCEL SLOT</div>
  
           <div  className="revenueclinic_container">
               <Labelbox type="select" value="Excel PolyClinic" style={{width:"150px"}} labelname="Clinic"/>
               </div>
          
          </div>
          <CancelSlotDetails />
          </Paper>
          </div>
      
    );
  }
}

export default CancelSlotMaster;
