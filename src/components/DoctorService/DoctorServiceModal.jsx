import React, { Component } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import Moment from "react-moment";
import { Input } from "antd";
import Button from '@material-ui/core/Button';
// import Plus from '../../Images/plus.png'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dateformat from 'dateformat';
import Grid from '@material-ui/core/Grid';
import Labelbox from "../../helpers/labelbox/labelbox";
import './DoctorServiceModal.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ValidationLibrary from '../../helpers/validationfunction';
import { apiurl } from "../../App";
import axios from 'axios';

export default class DoctorServiceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId:'',
      props_loading: false,
      docterService: {
        'service_type': {
          'value': '',
          validation: [{ 'name': 'required' }],
          error: null,
          errmsg: null
        },
        'total': {
          'value': '',
          validation: [{ 'name': 'required' }, { 'name': 'alphaNumaricOnly' }],
          error: null,
          errmsg: null
        },
        'slot': {
          'value': '',
          validation: [{ 'name': 'required' }, { 'name': 'alphaNumaricOnly' }],
          error: null,
          errmsg: null
        }
      }
    }
  }

  checkValidation = () => {
    var docterService = this.state.docterService;
    var serviceKeys = Object.keys(docterService);
    console.log(serviceKeys);
    for (var i in serviceKeys) {
      var errorcheck = ValidationLibrary.checkValidation(docterService[serviceKeys[i]].value, docterService[serviceKeys[i]].validation);
      console.log(errorcheck);
      docterService[serviceKeys[i]].error = !errorcheck.state;
      docterService[serviceKeys[i]].errmsg = errorcheck.msg;
    }
    var filtererr = serviceKeys.filter((obj) =>
      docterService[obj].error == true);
    console.log(filtererr.length)
    if (filtererr.length > 0) {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
      this.onSubmitData()
    }
    this.setState({ docterService })
  }
  changeDynamic = (data, key) => {
    var docterService = this.state.docterService;
    var errorcheck = ValidationLibrary.checkValidation(data, docterService[key].validation);
    docterService[key].value = data;
    docterService[key].error = !errorcheck.state;
    docterService[key].errmsg = errorcheck.msg;
    this.setState({ docterService });
  }


  onSubmitData = () => {
    var docterServiceApiData = {
      doctor_id: 1,
      active_flag: 1,
      service_type: this.state.docterService.service_type.value,
      total: this.state.docterService.total.value,
      slot: this.state.docterService.slot.value,
      created_by: 1,
      created_on: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss"),
      modified_by: 1,
      modified_on: dateformat(new Date(), "yyyy-mm-dd hh:MM:ss")
    }
    if(this.props.editData){
      this.doctorServiceUpdateApi(docterServiceApiData)   // Update Api Call
    }else{
      this.doctorServiceInsertApi(docterServiceApiData)
      // Insert Api Call
    }
    this.props.closemodal()

  }

  doctorServiceInsertApi = (docterServiceApiData) => {
    axios({
      method: 'POST',
      url: apiurl + '/insert_mas_doctor_service_type',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        ...docterServiceApiData
      }
    }).then((response) => {
      console.log(response)
      this.props.getTableData()
    }).catch((error) => {
      alert(JSON.stringify(error))
    })
  }

  doctorServiceUpdateApi = (docterServiceApiData) => {
    axios({
      method:'PUT',
      url: apiurl+'/edit_mas_doctor_service_type',
      data:{
        id:this.props.editData.id,
        ...docterServiceApiData
      }
    }).then((response)=>{
      console.log(response)
      this.props.getTableData()
    }).catch((error)=>{
      alert(JSON.stringify(error))
    })
  }

  componentDidMount(){
    // Assigning Edit Data
    const { editData,editOpenModal } = this.props;
    if (editOpenModal === true) {
      this.state.editId=editData.id
      this.state.docterService.service_type.value = editData.service_type
      this.state.docterService.total.value = editData.total
      this.state.docterService.slot.value = editData.slot
    }
    this.setState({})
  }



  render() {
    console.log("add_data", this.props.getTableData)
    return (
      <div className="medicine_ratedetails">
        <Grid container spacing={6}>
          <Grid item xs={6} md={6}>
            <div className="medicine_container">
              <Labelbox
                type="text"
                labelname="Service Type"
                valuelabel={'service_type'}
                changeData={(data) => this.changeDynamic(data, 'service_type')}
                value={this.state.docterService.service_type.value}
                error={this.state.docterService.service_type.error}
                errmsg={this.state.docterService.service_type.errmsg}
                required
              />
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className="medicine_details">
              <div className="dosage">
                <Labelbox
                  type="number"
                  labelname="Cost(KWD)"
                  valuelabel={'total'}
                  changeData={(data) => this.changeDynamic(data, 'total')}
                  value={this.state.docterService.total.value}
                  error={this.state.docterService.total.error}
                  errmsg={this.state.docterService.total.errmsg}
                  required
                />
              </div>
              <div className="medicine_mg">
                <Labelbox
                  type="number"
                  labelname="Slot"
                  valuelabel={'slot'}
                  changeData={(data) => this.changeDynamic(data, 'slot')}
                  value={this.state.docterService.slot.value}
                  error={this.state.docterService.slot.error}
                  errmsg={this.state.docterService.slot.errmsg}
                  required
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className="medibutt_container">
              <Button variant="contained" className="cancel_medibutt" onClick={this.props.closemodal}>Cancel</Button>
              <Button className="submit" onClick={this.checkValidation}>
                {
                  this.props.btnProps ? "Submit" : "Update"
                }
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}


