import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import Moment from "react-moment";
import { Input } from "antd";
import Button from '@material-ui/core/Button';
import Plus from '../../images/plus.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dateFormat from 'dateformat';
import Labelbox from "../../helpers/labelbox/labelbox";
import DoctorServiceTable from './DoctorServiceTable'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import Modalcomp from '../../helpers/ModalComp/Modalcomp'
import DoctorServiceModal from './DoctorServiceModal'
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './DoctorServiceMaster.css';
import { apiurl } from "../../App";


const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class DoctorServiceMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false
    };
  }
  closemodal = () => {
    this.setState({ view:false});
  };
  handleClickOpen=(t,title)=>
  {
  alert("handleclick")
    this.setState({view:true})
  
  }

  render() {
    const { Option } = Select;
    const { Search } = Input;
    console.log(dateFormat(new Date(),"dd mmm yyyy"))
    return (
      <div className="doctor_revenue">
          <Paper>
          {/* <div className="uploadsmasterheader">
          <div className="titlerevenue">DOCTOR SERVICE</div>
          <img src={Plus} onClick={this.handleClickOpen} className="plus-icon" /> */}
            {/* <div className="doctor_dashboard">
			       <ButtonGroup className="clinic_group_details" size="small" aria-label="small outlined button group">
              <Button className="clinic_details">This Day</Button>
              <Button className="clinic_details">This Month</Button>
              <Button className="clinic_details">This Year</Button>
            </ButtonGroup>
		
            <div className="currentdate"><FaChevronLeft className="current_left"/>{current_date}<FaChevronRight className="current_right"/></div>
            <Search
              placeholder=" search "
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              />
              
             </div>
           */}
          {/* </div> */}
         
       <DoctorServiceTable />
       </Paper>
      </div>
    );
  }
}


