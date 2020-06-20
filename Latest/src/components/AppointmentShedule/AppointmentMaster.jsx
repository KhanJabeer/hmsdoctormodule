/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import plus from '../../images/plus.png'
import Grid from '@material-ui/core/Grid'
import { Select } from 'antd';
import Axios from "axios";
import './AppointmentMaster.css'
import {apiurl} from '../../App';
import AppointmentDetails from './AppointmentDetails'
import Paper from '@material-ui/core/Paper';
const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }
const daysjson=[{id:8,label:"ALL",checked:false},{id:1,label:"MON",checked:false} ,{id:2,label:"TUE",checked:false},{id:3,label:"WED",checked:false},{id:4,label:"THU",checked:false},{id:5,label:"FRI",checked:false},{id:6,label:"SAT",checked:false},{id:7,label:"SUN",checked:false}]
const appdetails={"fromtime":"","totime":"","slotduration":"","NoOfslots":"","isvip":"",days:JSON.parse(JSON.stringify(daysjson))};
export default class Availabilitymaster extends Component {
  
    constructor(props)
    {
        super(props)
        this.state={
            addrow:false,
            date: "rrr",
            data:[],
            clinic:null,
            clinicData:[],
            appDetails:[JSON.parse(JSON.stringify(appdetails))]
        }
    }
    getTimeIntervals =  (time1, time2,slots)=> {
      var arr = [];
    while(time1 < time2){
      arr.push(time1.toTimeString().substring(0,5));
      time1.setMinutes(time1.getMinutes() + parseInt(slots));
    }
    return arr;
    }

    //get api
    
    getDetailsByClinic=(clinicId)=>{
      this.setState({clinic:clinicId})
      fetch(apiurl+'getdocAppointmentSettings',{
        method:'post',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "doctorId":"4",
        "clinicId":clinicId, 
        "limit":"50",    
        "pageno":"1"
      } )
  }).then((response) => response.json()).then((responseJson) => {
    let responseData=responseJson.data;
    console.log("responsecheck",responseData)
    var details=this.state.details;
    if(responseJson.status==1&&responseData.length>0&&responseData[0].details.length>0){
      console.log('response',responseJson);
      let responsedetails=responseData[0].details;
      var appDetails=this.state.appDetails;
      var detailsarray=[];
      responsedetails.map((val) => {
        var obj=JSON.parse(JSON.stringify(appdetails));
        obj.fromtime=val.from_time;
        obj.totime=val.to_time;
        obj.slotduration=val.slot_duration;
        obj.NoOfslots=val.no_of_slots;
        obj.isvip=val.is_vip.toString();
        obj.id=val.id;
        obj.days=obj.days.map((obj)=>{
          if(val.day.length>0){
            var obj1=obj;
            if(val.day.length==7){
              obj1.checked=true;
            }else{
              obj1.checked=val.day.includes(obj1.id.toString());
            }
            return obj1;
          }else{
            return obj;
          }
        });
        detailsarray.push(obj);
    })
    this.setState({appDetails:detailsarray});
    }else{
      //no network failed
    }
  })
    }
    
    getHoursInterval =(fromtime,totime,slotduration) => {
      console.log("intervaldata",fromtime,totime,slotduration);
      slotduration=slotduration?parseInt(slotduration):0;
      if(fromtime!=null&&totime!=null&&slotduration!=null){
        var splitfromtime=fromtime.split(':');
        var splittotime=totime.split(':');
        var convertedfromtime=this.converthoursminutes(splitfromtime[0],splitfromtime[1]);
        var convertedtotime=this.converthoursminutes(splittotime[0],splittotime[1]);
        var arr=0;
        var gettotalminutes=this.getTimeIntervals(convertedfromtime,convertedtotime,1);
        if(parseInt(slotduration)>0){
          arr = Math.floor(gettotalminutes.length/slotduration);
        }
        return arr;
        // this.setState({NoOfslots:arr})
        
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
 

   
//dropdown api
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
          },() =>{
            this.clinicList(this.state.clinicData)
            this.setState({clinic:this.state.clinicData[0].clinicId})
          })
          var data=response.data;
          console.log("AppointmentMaster -> componentWillMount -> data", data)
          
          if(data.status==0){//checking success response = 0
            this.setState({data: data.data})
          }
          // else{} send the error response = 1
        })
    }
    
    AddRow=()=>{
      var appDetails=this.state.appDetails;
      appDetails.unshift(JSON.parse(JSON.stringify(appdetails)));
      this.setState({appDetails});
        // this.setState({addrow:true})
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
    converthoursminutes=(hours,minutes)=>{
      var date=new Date();
      date=new Date(date.setHours(hours));
      date=new Date(date.setMinutes(minutes));
      return date;
    }
    updateDetails=(event,index,key,checkindex)=>{
      var appDetails=this.state.appDetails;
      console.log('key',key);
      
       if((key=='fromtime' || key=='totime' || key=='slotduration')){  
          appDetails[index][key]=event.target.value;
          appDetails[index].NoOfslots=this.getHoursInterval(appDetails[index].fromtime,appDetails[index].totime,appDetails[index].slotduration);
      }else if(key=='isvip'){
        appDetails[index][key]=event;
      }else if(key=='days'){
        console.log(event,checkindex);
        if(event.id==8){
          if(event.checked==false){
          appDetails[index][key].map((obj)=>{
            var obj1=obj;
            obj1.checked=true;
            return obj1;
          })
          }else{
            appDetails[index][key].map((obj)=>{
              var obj1=obj;
              obj1.checked=false;
              return obj1;
            })


          }
          console.log(appDetails);
        }else{
          appDetails[index][key][checkindex].checked=!event.checked;
        }
      }else{
      appDetails[index][key]=event.target.value;

      }
      this.setState({appDetails});
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
             
              value={this.state.clinic} onChange={(data)=>this.getDetailsByClinic(data.target.value)} >

                        {/* <option value={clinic.clinicId}>{clinic.clinicName}</option> */}
                        {this.clinicList()}

                  </select>
              
  
                </div>
         </Grid>
        <Grid items xs={6} md={6} className="plus-container">
        <div><img className="plus-icon"  src={plus} onClick={this.AddRow}/></div>
        </Grid>
        </Grid>
         </div>
         {this.state.appDetails.length>0&&
           <AppointmentDetails sucessProp={()=>this.getDetailsByClinic(this.state.clinic)} onChange={(event,index,key,checkindex)=>this.updateDetails(event,index,key,checkindex)} clinic={this.state.clinic} appDetails={this.state.appDetails}  />
        }
        </Paper>
         </div>
        )
    }
}
 