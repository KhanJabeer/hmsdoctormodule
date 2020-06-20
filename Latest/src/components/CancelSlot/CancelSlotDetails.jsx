import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import "./CancelSlotDetails.css";
import Calendar from "../Calendar/Calendar";
import Modalcomp from '../../helpers/ModalComp/Modalcomp'
import DeleteMedia from '../Availability/DeleteMedia'
import { NavLink} from "react-router-dom";


export default class CancelSlotDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textdisplay: false,
      displaytext:true,
    };
  }
  showhide = () => {
    
    var showhide = this.state.textdisplay
    this.setState({ textdisplay: !showhide });
  };

  hideshow = () => {
    
    var hideshow = this.state.displaytext
    this.setState({ displaytext: hideshow });
  };
  handleClickopen = () => {
    this.setState({ open: true });
  };
  handleClickclose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="cancelslot_head">
        <Grid container>
          <Grid item xs={12} md={7}>
            <Calendar />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="slot_pane">
              <div className="slot_pane_title">Cancel Slot</div>
            </div>

            <div className="slot_pane_content">
              <div className="pane_row_one">
                <div className="inner_pane_content">
                <Checkbox className="slot_checkbox_main" />
                <div className="slot_date">28 Oct 2020 </div>
              </div>
          <Button className={ `${this.state.textdisplay ? "btn-background_1" : "btn-background_2"}`} onClick={this.showhide}>
          {this.state.textdisplay ? "Hide Slots" : "Show Slots"}
          </Button>
          </div>
          { 
           this.state.textdisplay ?
           <Grid container className="hidden_slots_pane">

              <Grid item xs={6} md={3} className="hidslot_check">
              <Checkbox   className="hiddenslot_checkbox"/>
              <div className="slot_cancel">12:00</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox" defaultChecked/>
              <div className="slot_cancel">2:00</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox"/>
              <div className="slot_cancel">6:00</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox"/>
              <div className="slot_cancel">7:30</div></Grid>

             
              
              
              </Grid> : "" 
           }

          </div> 

          <div className="slot_pane_content">
          <div className="pane_row_two">
                <div className="inner_pane_content">
                <Checkbox className="slot_checkbox_main" />
                <div className="slot_date">29 Oct 2020 </div>
              </div>
          <Button className="showslot_button" >Show Slots</Button>
          
          </div>
          </div>
          
          <div className="slot_pane_content">
          <div className="pane_row_two">
                <div className="inner_pane_content">
                <Checkbox className="slot_checkbox_main" >
                {this.state.displaytext ? "checked" :  ""}
                </Checkbox>
                <div className="slot_date">30 Oct 2020 </div>
              </div>
              <Button className={ `${this.state.displaytext ? "btn-background_1" : "btn-background_2"}`} onClick={this.hideshow}>
          {this.state.displaytext ? "Show Slots" : "Hide Slots"}
          </Button>
          
          </div>
          { 
           this.state.displaytext ?
           <Grid container className="hidden_slots_pane">
              <Grid item xs={6} md={3} className="hidslot_check">
              
              <Checkbox  className="hiddenslot_checkbox"/>
              <div className="slot_cancel">ALL</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox" defaultChecked/>
              <div className="slot_cancel">2:00</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox" defaultChecked/>
              <div className="slot_cancel">6:00</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox" defaultChecked/>
              <div className="slot_cancel">7:30</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox" defaultChecked/>
              <div className="slot_cancel">5:30</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox" defaultChecked/>
              <div className="slot_cancel">1:00</div></Grid>

              <Grid item xs={6} md={3}  className="hidslot_check">
              <Checkbox  className="hiddenslot_checkbox"/>
              <div className="slot_cancel">2:30</div></Grid>
              
              
              </Grid> : "" 
           }
          </div>
            <div className="cancel_slot_buttons">
             
              <Button className="slotcancel_button" component={NavLink} to="/home/availability">cancel</Button>
              <Button className="slot_confrim_button" onClick={this.handleClickopen}>Confirm</Button>
              </div>
</Grid>

        </Grid>

        <Modalcomp xswidth={"xs"}   visible={this.state.open} 
        title="Cancel"
        closemodal={this.handleClickclose} >

        <DeleteMedia closemodal={this.handleClickclose}/>

        </Modalcomp >
      </div>
    );
  }
}
