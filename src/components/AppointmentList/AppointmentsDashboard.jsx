import React, { Component } from "react";
import "./AppointmentsDashboard.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import Moment from "react-moment";
import AppointmentsTable from "./AppointmentsTable";
import { Input } from "antd";
import Button from '@material-ui/core/Button';
import Plus from '../../images/plus.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dateFormat from 'dateformat';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Labelbox from "../../helpers/labelbox/labelbox";
import Paper from '@material-ui/core/Paper';
import Pdf  from '../../images/pdf.svg'
import Print from '../../images/print.svg'
import Excel from '../../images/excel.svg'
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
class AppointmentsDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr"
    };
  }

  render() {
    const { Option } = Select;
    const { Search } = Input;
    console.log(dateFormat(new Date(),"dd mmm yyyy"))
    return (
      <div className="appoint_dashboard_master">
        <Paper>
          
          <div className="media_service_head">
          <div className="titleuser"><div>APPOINTMENT LIST</div>
           
           </div>
           
              <div className="doctorappoint_container">
              <div className="doctor_type_head"><p className="doctorpatient_head">Patient Type</p><div style={{width:"150px"}} className="patientselect_div"><Labelbox type="select" style={{width:"100%"}}/></div></div>
              <div className="group_buttons_div">
			       <ButtonGroup className="clinic_group_details" size="small" aria-label="small outlined button group">
              <Button className="clinic_details">This Day</Button>
              <Button className="clinic_details">This Month</Button>
              <Button className="clinic_details">This Year</Button>
            </ButtonGroup>
		
            <div className="currentdate"><ChevronLeftIcon className="right_arrowicon"/>{current_date}<ChevronRightIcon className="right_arrowicon"/></div>
            <Search
              placeholder=" search "
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              className="search_box_container"
              /> 
               <img src={Pdf} className="pdf"/>
                <img src={Excel} className="excel"/>
                <img src={Print} className="print"/>
              </div>
              </div>
          </div>
        <AppointmentsTable />
        </Paper>
      </div>
    );
  }
}

export default AppointmentsDashboard;
