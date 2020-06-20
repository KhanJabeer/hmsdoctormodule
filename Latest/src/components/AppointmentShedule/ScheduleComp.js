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
          <TableCell component="th" id={""} scope="row" padding="none"  style={{width:"10.5vw"}}>
                                 <div className="Availability-sno-wrapper">  {index+1} </div>
                               </TableCell>
                              
                               <TableCell align="right" style={{ width: "11.8vw" }}>
                                 <TextField name="fromtime" type="time" className="timepick" value={data.fromtime} onChange={(e) => this.handleChange(e,index,'fromtime')}  style={{ width: 90 }}/>
                                 <div>{this.state.fromError}</div></TableCell>
                               

                               <TableCell align="right" style={{ width: "15vw" }} >
                                 <TextField name="totime" type="time" className="timepick" value={data.totime} onChange={(e) => this.handleChange(e,index,'totime')} style={{ width: 90 }} />
                                 <div>{this.state.toError}</div></TableCell>
                                 
 
                               <TableCell align="right" style={{ width: "15vw" }}>
                                 <input value={data.slotduration}  className="Abi" name="slotduration" onChange={(e) => this.handleChange(e,index,'slotduration')} style={{ width: 60 }} /><label className="slot-duration-unit_label">Min</label>
                                 <div>{this.state.durationError}</div> </TableCell>
                                 

                               <TableCell align="right" style={{ width: "12vw" }}>
                                <input className="noofslot" value={data.NoOfslots} onChange={(e) => this.handleChange(e,index,'NoOfslots')} name="NoOfslots" style={{ width: 60 }} />
                                 <div>{this.state.slotsError}</div></TableCell>
                                 

                               <TableCell align="right" style={{ width: "13vw" }}><div>
                               <Select className="appointmenttype" onChange={(data) => this.handleChange(data,index,'isvip')} value={[data.isvip]} style={{ width: 110 }} >
                                 <Option className="appointmenttype"   value="2" id="2">Regular</Option>
                                 <Option className="appointmenttype"  value="1" id="1">Vip</Option>
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
         {/* <EditIcon className="edit_icon"/> */}
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
