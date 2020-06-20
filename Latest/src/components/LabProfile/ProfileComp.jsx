import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import './ProfileComp.css'
import Paper from "@material-ui/core/Paper";
// import Calendar from './Calendar';
import Grid from "@material-ui/core/Grid";
import { TiLocation, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
import Trainee from "../../images/11.jpg";
import Modalcomp from './ProfileModal'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
class ProfileComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr",open:false
    };
  }
  handleopen=()=>
  {
    this.setState({open:true})
  }
  handleClose=()=>
  {
    this.setState({open:false})
  }
  render() {
  

    return (
      <div className="deal_listcreatead">
         <Paper className="profile_background">
       <div className="profileback_first">PROFILE</div>
         
           
             <div className="profilepaper_container">
              <Paper className="profilebackground">
              <Grid container className="total">
            <Grid item xs={12} md={5}>
              <div className="trainee_image_container">
                <div className="trainee_image_div">
                  <img className="trainee_image" src={Trainee} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="addtrainee_gridcontainer">
              <div className="addtraineee_containerdiv">
                <div className="icon_edit">
                  <EditIcon className="icon" onClick={this.handleopen}/>
                </div>
                <div>
                  <h1 className="trainee_head">Dr.AAMINA  </h1>
                  <p className="position">MD</p>
                  <div className="trainee_head_two">
                    <p className="position">Exp- 5 Years</p>
                  <p className="position">Clinic- Excel Polyclinic</p>
                  </div>
                  <div className="self_description">
                    <p className="description" >Dr Aamina is one amongst the senior most Medical</p>
                    <p className="doc_description">Consultants with 40 years rich experience&handled
                    <span className="elipse">...</span></p>
                  </div>
                  <div className="profile_age_details">
                    <h5>
                      <MdLocationOn className="group_icons"/>
                    </h5>
                    <p className="trainee_text">
                      Jabariya<span className="elipse">...</span>
                    </p>
                  </div>
                  <div className="profile_age_details">
                    <h5>
                      <MdLocalPhone className="group_icons"/>
                    </h5>
                    <p className="trainee_text">+965 220000001</p>
                  </div>
                  <div className="profile_age_details">
                    <h5>
                      <IoIosGlobe className="group_icons"/>
                    </h5>
                    <p className="trainee_text">+965 220000001</p>
                  </div>
                  <div>
                    <h4 className="working_hours">
                      <b>Personal Details</b>
                    </h4>
                  </div>
                  <div className="working_detail">
                    <h4 className="working_hour_detail">Gender</h4>

                    <p className="working_times_detail">Female</p>
                  </div>
                  <div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">Date of Birth</h4>
                      <p className="working_times_detail">21-06-1985</p>
                    </div>
                  </div>
                  <div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">Nationality</h4>
                      <p className="working_times_detail">Saudi</p>
                    </div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">Speciality</h4>

                      <p className="working_times_detail">Cardiologist,Dermatologist</p>
                    </div>
                    <div className="working_detail">
                      <h4 className="working_hour_detail">Practicing Since</h4>

                      <p className="working_times_detail">27 Jun 2012</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                
              </div>

             
            
            </Grid>
          </Grid>
              </Paper>
              </div>
          </Paper>
          <Modalcomp  open={this.state.open} onClose={this.handleClose} title="gfffffffffffffh"/>
          </div>

      
    );
  }
}

export default ProfileComp;
