import React, { Component } from "react";
import plus from "../../images/plus.png";
import Grid from "@material-ui/core/Grid";
import "./CancelledDashboard.css";
import CancelledTable from "./CancelledTable";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Input, Select, Icon } from 'antd';
import dateFormat from 'dateformat';
import Paper from '@material-ui/core/Paper';
import Pdf  from '../../images/pdf.svg'
import Print from '../../images/print.svg'
import Excel from '../../images/excel.svg'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Labelbox from '../../helpers/labelbox/labelbox'
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class CancelledDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClickopen = () => {
    this.setState({ open: true });
  };
  handleClickclose = () => {
    this.setState({ open: false });
  };

  render() {
    const { Search } = Input;
    console.log(dateFormat(new Date(),"dd mmm yyyy"))
    return (
      <div className="mediaservicemaster">
        <Paper>
        <div className="uploadsmasterheader">
              <div className="titleuser">CANCELLED HISTORY</div>
              <div className="doctorplus-container">
             
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
      
        <CancelledTable />
        <div className="Upload-modal-container">
         
        </div>
        </Paper>
      </div>
    );
  }
}
