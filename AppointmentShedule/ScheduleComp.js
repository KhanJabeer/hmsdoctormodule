import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead'
import { Select } from 'antd';
import { Input } from 'antd';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {apiurl} from '../../App';
import TextField from '@material-ui/core/TextField';
import './ScheduleComp.css'
const { Option } = Select;

class ScheduleComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fromtime:null,
            fromError:"",
            totime:null,
            toError:"",
            slotduration:null,
            durationError:"",
            ipaddress:"126.187.50.1",
            isvip:null,
            vipError:"",
            NoOfslots:null,
            slotsError:"",
           
            checkedA:false,
            checkedB:false,
            checkedC:false,
            checkedD:false,
            checkedE:false,
            checkedF:false,
            checkedG:false,
            checkedH:false,
            days:[]
        }
    }
validate = () =>{
let fromError="";
let toError="";


if(!this.state.fromtime==null && !this.state.toError==null){
  fromError="Time Format is Invalid";
  toError="Time Format is Invalid";
  
}

if(fromError){
  this.setState({fromError,toError})
  return false
}
return true

}

converthoursminutes=(hours,minutes)=>{
  var date=new Date();
  date=new Date(date.setHours(hours));
  date=new Date(date.setMinutes(minutes));
  return date;
}
getTimeIntervals =  (time1, time2,slots)=> {
  var arr = [];
while(time1 < time2){
  arr.push(time1.toTimeString().substring(0,5));
  time1.setMinutes(time1.getMinutes() + parseInt(slots));
}
return arr;
}
getHoursInterval =() => {
  var {fromtime,totime,slotduration}=this.state;

  // console.log(fromtime);
  // console.log(totime);
  // console.log(slotduration);
  if(fromtime!=null&&totime!=null&&slotduration!=null){
    var splitfromtime=fromtime.split(':');
    var splittotime=totime.split(':');
    var convertedfromtime=this.converthoursminutes(splitfromtime[0],splitfromtime[1]);
    var convertedtotime=this.converthoursminutes(splittotime[0],splittotime[1]);
    var arr=0;
    var gettotalminutes=this.getTimeIntervals(convertedfromtime,convertedtotime,1);
    if(parseInt(slotduration)>0){
      arr =  Math.floor(gettotalminutes.length/slotduration);
    }
    // console.log('arr',arr);
    this.setState({NoOfslots:arr})
    
    // return arr;
    // console.log(new Date(convertedfromtime));
    // var splitfromt
  }

//   var fromTime =   new Date(`0000 ${this.state.fromTime}`)
//   var toTime = new Date(`0000 ${this.state.toTime}`)
//   var interval = this.state.slotduration
//       var arr = [];
//       while (fromTime < toTime) {
//         var nextTime = new Date(fromTime.toString());

//         var AddedMinutes = new Date(
//           nextTime.setMinutes(nextTime.getMinutes() + interval)
//         );

//         // console.log(
//         //   "getHoursInterval -> AddedMinutes",
//         //   typeof nextTime.getMinutes()
//         // );

//         var formattedFrmTime = fromTime
//         var formattedToTime = AddedMinutes

//         arr.push({
//           // id: arr.length + 1,
//           fromTime: formattedFrmTime,
//           toTime: formattedToTime,
//         });

//         fromTime.setMinutes(fromTime.getMinutes() + interval);
//         // console.log(fromTime);
//       }
//       this.setState({NoOfslots:arr})
//  console.log(arr);
//       return arr;
   
   
  }
    // send api

    sendDetails = () => {
      const isValid= this.validate()
      console.log("iddd", this.props.clinic)
      if (isValid){
        var data = {
            "clinicId":this.props.clinic !== '' ? this.props.clinic : 1,
            "fromtime":this.state.fromtime,   
            "totime":this.state.totime,
            "slotduration":this.state.slotduration,
            "NoOfslots":this.state.NoOfslots,
            "days": this.state.days, 
            "doctorId":"4",
            "isvip":this.state.isvip,
            "createdby":"19",
            "ipaddress":"126.187.50.1"
        }

        fetch(apiurl+'insertdocAppointmentSettings',{
              method:'post',
              headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((response) => response.json()).then((responseJson) => {
            console.log("success or not",responseJson)
        })

        console.log("sdfkjsdkfjskdfjksfd",data)
        } }

    handleChange = (event) => {
      
        this.setState({
            [event.target.name] :event.target.value
        },function(){
          this.getHoursInterval();
        })
    }

    Changecheckedbox = ((name,id) => event => {
        
        this.setState({ ...this.state, [name]: event.target.checked,days:[...this.state.days,id]},() => console.log("sdfksdkfjsdklf",this.state.days));
    });

    handledrop = (value) => {
        alert("Are you",value)
          value === "vip" ? this.setState({isvip:1}) : this.setState({isvip:2})
    }
    render() {
        return (
            <div>
                 <div>
        <div className="AvailabilityDetailsDiv">
            <TableRow> 
          <TableCell component="th" id={""} scope="row" padding="none"  style={{width:"9vw"}}>
                                 <div className="Availability-sno-wrapper">  {"1"} </div>
                               </TableCell>
                              
 
 
                               <TableCell align="right" style={{ width: "15vw" }}>
                                 <TextField name="fromtime" type="time" className="timepick" value={this.state.fromtime} onChange={this.handleChange}  style={{ width: 90 }}/>
                                 <div>{this.state.fromError}</div></TableCell>
                               

                               <TableCell align="right" style={{ width: "15vw" }} >
                                 <TextField name="totime" type="time" className="timepick" value={this.state.totime} onChange={this.handleChange} style={{ width: 90 }} />
                                 <div>{this.state.toError}</div></TableCell>
                                 
 
                               <TableCell align="right" className="Abi" style={{ width: "15vw" }}>
                                 <Input value={this.state.slotduration} name="slotduration" onChange={this.handleChange} style={{ width: 60 }} /><label className="slot-duration-unit_label">Min</label>
                                 <div>{this.state.durationError}</div> </TableCell>
                                 

                               <TableCell align="right" style={{ width: "12vw" }}>
                                 <div className="no_of_slots_data"><Input value={this.state.NoOfslots} onChange={this.handleChange} name="NoOfslots" style={{ width: 60 }} /></div>
                                 <div>{this.state.slotsError}</div></TableCell>
                                 

                               <TableCell align="right" style={{ width: "13vw" }}><div>
                               <Select className="availability-clinic-toggledropdown" onChange={this.handledrop} defaultValue="" style={{ width: 110 }} >
                                 <Option className="availability-clinic-toggledropdown"   value="regular" id="2">Regular</Option>
                                 <Option className="availability-clinic-toggledropdown"  value="vip" id="1">Vip</Option>
                               </Select> </div>
                               <div>{this.state.vipError}</div></TableCell>
                             </TableRow>
 
 
 
 
                             <TableRow
                               hover
                               role="checkbox"
                             >
                               <TableCell align="right" colSpan={8}>
                               
                                 <FormGroup row className="Availability-checkbox-row-div">
       <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedA" onChange={this.Changecheckedbox('checkedA')} checked={this.state.checkedA} />
         }
         label="All"
       />
             <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedB"  onChange={this.Changecheckedbox('checkedB',7)} checked={this.state.checkedB} />
         }
         label="SUN"
       />
             <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedC" onChange={this.Changecheckedbox('checkedC',1)} checked={this.state.checkedC} />
         }
         label="MON"
       />
             <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedD"  onChange={this.Changecheckedbox('checkedD',2)} checked={this.state.checkedD} />
         }
         label="TUE"
       />
             <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA"  value="checkedE" onChange={this.Changecheckedbox('checkedE',3)} checked={this.state.checkedE} />
         }
         label="WED"
       />
       <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedF"  onChange={this.Changecheckedbox('checkedF',4)} checked={this.state.checkedF}/>
         }
         label="THU"
       />
       <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedG"  onChange={this.Changecheckedbox('checkedG',5)} checked={this.state.checkedG} />
         }
         label="FRI"
       />
       <FormControlLabel style={{ width:80}}
         control={
           <Checkbox  name="checkedA" value="checkedH" onChange={this.Changecheckedbox('checkedH',6)} checked={this.state.checkedH} />
         }
         label="SAT"
       />
       
       
       </FormGroup>
       <div className="delete_container">
         <Button className="save_btn" onClick={() => this.sendDetails()} >Save</Button>
         <EditIcon className="edit_icon"/>
         <DeleteIcon className="delete_icon"/>
         </div>
       </TableCell> 
           </TableRow> 
        </div>
     
      
        </div>
                
            </div>
        )
    }
}

export default ScheduleComp




import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead'
import { Select } from 'antd';
import { Input } from 'antd';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {apiurl} from '../../App';
import TextField from '@material-ui/core/TextField';
import './ScheduleComp.css'
import { FiSave }  from "react-icons/fi";
const { Option } = Select;

class ScheduleComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            fromError:"",            
            toError:"",            
            durationError:"",
            ipaddress:"126.187.50.1",
            vipError:"",
            slotsError:"",
           details:[],
            
            days:[],
            appointmentData:[{
              fromtime:null,
              totime:null,
              slotduration:"",
              NoOfslots:null,
              isvip:null,  
            }],
              checkedA:false,
              checkedB:false,
              checkedC:false,
              checkedD:false,
              checkedE:false,
              checkedF:false,
              checkedG:false,
              checkedH:false,
        }
        console.log("sfsdfhdjsfhjsdfhjsdfh",this.props)
    }
validate = () =>{
let fromError="";
let toError="";


if(!this.state.fromtime==null && !this.state.toError==null){
  fromError="Time Format is Invalid";
  toError="Time Format is Invalid";
  
}

if(fromError){
  this.setState({fromError,toError})
  return false
}
return true

}

componentWillReceiveProps(){
  //  if(this.props.addrow){
  //    this.addrows()
  //  }
}
componentDidMount(){
  // this.getDetails();
}
addrows = () => {
  // this.setState({
  //   appointmentData:[...this.state.appointmentData,{"fromtime":"","totime":"","slotduration":"","NoOfslots":"","isvip":"","checkedA":false,"checkedB":false,"checkedC":false,"checkedD":false,"checkedE":false,"checkedF":false,"checkedG":false,"checkedH":false}]
  // })
}

//delete api
deleteRows = (id) => {
  if(id){
  var confirm =window.confirm('are you sure want to delete')
  if(confirm){
    fetch(apiurl+'deletedocAppointmentSettings',{
      method:'delete',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify({id:id})
  }).then((response)=>response.json())
  .then((responsejson)=>{
    // console.log(responsejson);
    if(responsejson.status==1){
      alert("deleted successfully");
      this.props.sucessProp(true);
    }else{
      alert("problem while requesting...")
    }
  })
  }
  }
}


converthoursminutes=(hours,minutes)=>{
  var date=new Date();
  date=new Date(date.setHours(hours));
  date=new Date(date.setMinutes(minutes));
  return date;
}
getTimeIntervals =  (time1, time2,slots)=> {
  var arr = [];
while(time1 < time2){
  arr.push(time1.toTimeString().substring(0,5));
  time1.setMinutes(time1.getMinutes() + parseInt(slots));
}
return arr;
}

    // send api

    sendDetails = (data) => {
      const isValid= this.validate()
      var filterdays=data.days.filter((obj)=>obj.checked==true&&obj.id!=8)

      console.log("iddd", this.props.clinic)
      if (isValid){
        var data = {
            "clinicId":this.props.clinic,
            "fromtime":data.fromtime,   
            "totime":data.totime,
            "slotduration":data.slotduration,
            "NoOfslots":data.NoOfslots,
            "days": filterdays.length>0?filterdays.map((obj)=>obj.id):[], 
            "doctorId":"4",
            "isvip":data.isvip,
            "createdby":"19",
            "ipaddress":"126.187.50.1",
            "modifiedby":"4",
            "id":data.id
           
        }
        console.log("inserting data",data)
        fetch(apiurl+(data.id?'editdocAppointmentSettings':'insertdocAppointmentSettings'),{
              method:data.id?"put":"post",
              headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((response) => response.json()).then((responseJson) => {
            console.log("success or not",responseJson)
            alert(data.id?"updated successfully":"inserted successfully");
            this.props.sucessProp(true)
        })

        console.log("sdfkjsdkfjskdfjksfd",data)
        } }



    handleChange = (event,index,key,checkindex) => {
      this.props.onChange(event,index,key,checkindex);
   
  }

  editDetails = (id,data) => {
    
    var confirm =window.confirm('are you sure want to edit')
   
  
}

    render() {
      // alert(JSON.stringify(this.props.data))
      const {data,index}=this.props;
        return (
            <div>
                 <div>
        <div className="AvailabilityDetailsDiv">
         
  
            <TableRow> 
          <TableCell component="th" id={""} scope="row" padding="none"  style={{width:"9vw"}}>
                                 <div className="Availability-sno-wrapper">  {index+1} </div>
                               </TableCell>
                              
                               <TableCell align="right" style={{ width: "15vw" }}>
                                 <TextField name="fromtime" type="time" className="timepick" value={data.fromtime} onChange={(e) => this.handleChange(e,index,'fromtime')}  style={{ width: 90 }}/>
                                 <div>{this.state.fromError}</div></TableCell>
                               

                               <TableCell align="right" style={{ width: "15vw" }} >
                                 <TextField name="totime" type="time" className="timepick" value={data.totime} onChange={(e) => this.handleChange(e,index,'totime')} style={{ width: 90 }} />
                                 <div>{this.state.toError}</div></TableCell>
                                 
 
                               <TableCell align="right" className="Abi" style={{ width: "15vw" }}>
                                 <input value={data.slotduration} name="slotduration" onChange={(e) => this.handleChange(e,index,'slotduration')} style={{ width: 60 }} /><label className="slot-duration-unit_label">Min</label>
                                 <div>{this.state.durationError}</div> </TableCell>
                                 

                               <TableCell align="right" style={{ width: "12vw" }}>
                                 <div className="no_of_slots_data"><input value={data.NoOfslots} onChange={(e) => this.handleChange(e,index,'NoOfslots')} name="NoOfslots" style={{ width: 60 }} /></div>
                                 <div>{this.state.slotsError}</div></TableCell>
                                 

                               <TableCell align="right" style={{ width: "13vw" }}><div>
                               <Select className="availability-clinic-toggledropdown" onChange={(data) => this.handleChange(data,index,'isvip')} value={[data.isvip]} style={{ width: 110 }} >
                                 <Option className="availability-clinic-toggledropdown"   value="2" id="2">Regular</Option>
                                 <Option className="availability-clinic-toggledropdown"  value="1" id="1">Vip</Option>
                               </Select> </div>
                               <div>{this.state.vipError}</div></TableCell>
                             </TableRow>
 
 
 
 
                             <TableRow
                               hover
                               role="checkbox"
                             >
                               <TableCell align="right" colSpan={8}>
                               
                                 <FormGroup row className="Availability-checkbox-row-div">
                                   {data.days&&data.days.map((obj,dayindex)=>{
                                     return(
                                      <FormControlLabel style={{ width:80}}
                                      control={
                                        <Checkbox  name="checkedA" value={obj.value} onChange={()=>this.handleChange(obj,index,'days',dayindex)} checked={obj.checked} />
                                      }
                                      label={obj.label}
                                    />

                                     )
                                   })}
      
          
       
       </FormGroup>
       <div className="delete_container">
         <FiSave className="save_btn" onClick={() => this.sendDetails(data)} ></FiSave>
         <EditIcon className="edit_icon"/>
         <DeleteIcon className="delete_icon" onClick={() => this.deleteRows(data.id)}/>
         </div>
       </TableCell> 
           </TableRow> 
        
        </div>
     
      
        </div>
        </div>

        )
    }
}

export default ScheduleComp
