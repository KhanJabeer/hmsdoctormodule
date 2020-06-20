import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./AppointmentsTable.css"
import crowngold from "../../images/crown-golden.png";
import dateFormat from 'dateformat';
import Greenwalk from '../../images/greenwalk.png'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import Profilepage from './Profilepage'
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))

class DashboardTable extends React.Component{

    state={
        openview:false
    }

    createData=(parameter) =>{
        var keys=Object.keys(parameter)
        var values=Object.values(parameter)
  
        var returnobj={}
        
        for(var i=0;i<keys.length;i++){
        returnobj[keys[i]]=values[i]
        }
        return(returnobj)
        }

        modelopen=(data)=>{
            if(data==="view"){
                this.setState({openview:true})
            }
            else if(data==="edit"){
                this.setState({editopen:true})
            }
        }

        closemodal=()=>{
                this.setState({openview:false,editopen:false})
        }


    render(){
         
        return(
            <div>
                
               
     
             
                <Tablecomponent
                
                 heading={[
                    { id: "", label: "S.No" },
                    { id: "type", label: "Type" },
                    { id: "customer", label: "Customer" },
                    { id: "gender", label: "Gender" },
                    { id: "age", label: "Age" },
                    { id: "date", label: "Date" },
                    { id: "time", label: "Time" },              
                    { id: "", label: "Action" }
                ]}
  

            rowdata={[
                this.createData({type: <PhoneIphoneIcon className="react-icon-mob" />,customer: "Aswin", gender: "Male", age: "25", date:"11 Dec 2020", time: "10.00 AM"}),
                this.createData({type: <img src={crowngold} />,customer: "Abdul", gender: "Male", age: "35", date:"13 Dec 2020", time: "10.30 AM"}),
                this.createData({type:<img src={Greenwalk} className="head-icon"/>,customer: "Syed", gender: "Male", age: "30", date:"19 Apr 2020", time: "11.30 AM"}),
                this.createData({type:<PhoneIphoneIcon className="react-icon-mob" />,customer: "Edwin", gender: "Male", age: "24", date:"11 Dec 2020", time: "11.30 AM"}),
                this.createData({type:<img src={crowngold} />,customer: "Arjun", gender: "Male", age: "28", date:"11 Dec 2020", time: "11.30 AM"}),
                this.createData({type:<img src={Greenwalk} className="head-icon"/>,customer: "Raja", gender: "Male", age: "32", date:"30 Dec 2020", time: "11.30 AM"}),
                this.createData({type:<PhoneIphoneIcon className="react-icon-mob" />,customer: "Ranjith", gender: "Male", age: "35", date:"11 Dec 2020", time: "11.30 AM"}),
            ]}

    tableicon_align={"cell_eye"}
    modelopen={(e)=>this.modelopen(e)}
    EditIcon="close"
    DeleteIcon="close"
  />
 
        
        {/* <Modalcomp  visible={this.state.openview} title={"View details"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp> */}
        {/* <Profilepage open={this.state.openview} onClose={this.closemodal}/> */}

        <Modalcomp  visible={this.state.editopen} title={"EDIT DETAILS"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp>
              

        </div>
        )
    }
}

export default DashboardTable;