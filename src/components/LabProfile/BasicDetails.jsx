import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import Moment from "react-moment";
import Paper from "@material-ui/core/Paper";
// import './PharmacyEntryMaster'
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import { Input } from "antd";
import { DatePicker } from "antd";

import "./BasicDetails.css";

export default class BasicDetails extends React.Component {
  render() {
    const { TextArea } = Input;
    return (
      <div className="basic_details_container">
        <Grid container>
          <Grid item xs={12} md={4} className="basicdetails_container">
            <div className="basicdetails_firstgrid">
              <div className="basicdetails_child">
                <Labelbox type="text" labelname="Qualification" value="MD" />
                <Labelbox type="select" labelname="Experience" value="5year" />
                <Labelbox
                  type="datepicker"
                  labelname="Practicing Since"
                  value=""
                />
                <Labelbox
                  type="text"
                  labelname="Address"
                  value="Abdul Rahman"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="basicdetails_container">
            <div className="basicdetails_firstgrid">
              <div className="basicdetails_child">
                <Labelbox
                  type="text"
                  labelname="Speciality"
                  value="Cardiologist"
                />
                <Labelbox
                  type="text"
                  labelname="Mobile Number"
                  value="+96522000001"
                />
                <Labelbox type="text" labelname="Website" />
                <Labelbox
                  type="text"
                  labelname="Clinic"
                  value="Excel Polyclinic"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="basicdetails_container">
            <div className="basicdetails_firstgrid">
              <div className="basicdetails_child">
                <Labelbox
                  type="text"
                  labelname="Email Id"
                  value="tgef@pt.com"
                />
                <div>
                  <h3 className="profile_description">Self Description</h3>
                  <TextArea
                    type="textarea"
                    className="Self_Description"
                    value="Dr Aamina is one amongst the senior most Medical Consultants with 40 years rich experience & handled various medical emergencies currently working Royale Hospital"
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
