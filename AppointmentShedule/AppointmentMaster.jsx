/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import plus from '../../images/plus.png'
import Grid from '@material-ui/core/Grid'
import { Select } from 'antd';
import Axios from "axios";
import './AppointmentMaster.css'
import AppointmentDetails from './AppointmentDetails'
import Paper from '@material-ui/core/Paper';
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class Availabilitymaster extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            addrow:false,
            date: "rrr",
            data:[],
            clinic:"",
            clinicData:[]
        }
    }




    clinicList = () => {
    
      var clinicList = [];
      for(let i=0; i<this.state.clinicData.length; i++){
       
        console.log("CLINICID",this.state.clinicData[i])
        clinicList.push(<option key={i+1} value={this.state.clinicData[i].clinicId} >{this.state.clinicData[i].clinicName}</option>)
      }
      return clinicList;
    }
 

   

    componentDidMount(){
        Axios({
          method: 'POST',
          url: "http://52.200.251.222:8158/api/v1/getDoctorClinics",
          data: {
              "doctorId":"1",
            
        }
          
        })//if your using axios no need of conversion to json
        .then((response) =>{//2.getting json response in another promise function called .then function
          // console.log("response",data)
          console.log("sdfsdafsdafasdf",response)
          this.setState({
            clinicData:response.data.data
          },() => this.clinicList(this.state.clinicData))
          var data=response.data;
          console.log("AppointmentMaster -> componentWillMount -> data", data)
          
          if(data.status==0){//checking success response = 0
            this.setState({data: data.data})
          }
          // else{} send the error response = 1
        })
    }
    
    AddRow=()=>{
        this.setState({addrow:true})
 }

 handleOnChange=(event)=>{
          this.setState({
        clinic:event
      })

    }
valueChange =(data) =>{
  alert("hi")
}

    handleChange = (event) => {
      this.setState({
        clinic:event.target.value
      })
    }

   
    render() {
        return (
         <div className="uploadmaster">   
         <Paper>
        <div className="uploadsmasterheader">
        <Grid container>
        <Grid items xs={6} md={6}>
        <div className="titleuser">APPOINTMENT SETTING SCHEDULE</div>

        <div className="Availability-clinic-dropdown">
            <label className="availability-clinic-label">Clinic </label>

           
             
              <select className="availability-clinic-toggledropdown"
             
              style={{width:"150px", height:"30px", fontSize:"14px", fontWeight:"100"}} value={this.state.clinic} onChange={this.handleChange} >

                        {/* <option value={clinic.clinicId}>{clinic.clinicName}</option> */}
                        {this.clinicList()}

                  </select>
              
  
                </div>
         </Grid>
        <Grid items xs={6} md={6} className="plus-container">
        <div><img className="plus-icon"  src={plus} onClick={() => this.AddRow()}/></div>
        </Grid>
        </Grid>
         </div>
         <AppointmentDetails addrow={this.state.addrow} clinic={this.state.clinic} />
        </Paper>
         </div>
        )
    }
}
 