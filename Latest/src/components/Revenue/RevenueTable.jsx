import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./RevenueTable.css"
import crowngold from "../../images/crown-golden.png";
import dateFormat from 'dateformat';
import Greenwalk from '../../images/greenwalk.png'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
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
                    { id: "sno", label: "S.no" },
                    { id: "customer", label: "Customer" },
                    { id: "doctorname", label: "Doctor Name" },
                    { id: "clinicname", label: "Clinic Name" },
                    { id: "date", label: "Date" },
                    { id: "cash", label: "Cash" },
                    { id: "Card", label: "Card" },
                    { id: "insurance", label: "Insurance" },
                    { id: "wallet", label: "Wallet" },
                    { id: "totalcharge", label: "Total Charge (KWD)" },  
                ]}
            rowdata={[
                this.createData({customer: "test", doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant", date:"11 Apr 2010",card:"100",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
                this.createData({customer: "ashwin",  doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant", date:"11 Apr 2010",card:"150",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
                this.createData({ customer: "syed",  doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant",  date:"11 Apr 2010",card:"150",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
                this.createData({ customer: "edwin",  doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant",  date:"11 Apr 2010",card:"150",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
                this.createData({ customer: "arjun",  doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant",  date:"11 Apr 2010",card:"150",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
                this.createData({ customer: "raja",  doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant", date:"11 Apr 2010",card:"150",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
                this.createData({customer: "rani",  doctorname:"Abdul-khaafid", clinicname:"Aliance Health Durant",  date:"11 Apr 2010",card:"150",cash:"250",insurance:"50",wallet:"0", totalcharge:"300"}),
            ]}

    tableicon_align={""}
    modelopen={(e)=>this.modelopen(e)}
    EditIcon="close"
    DeleteIcon="close"
    VisibilityIcon="close"
    grandtotal="total"
    subheading="enable"
  />

 
        
        {/* <Modalcomp  visible={this.state.openview} title={"View details"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp> */}
      

        <Modalcomp  visible={this.state.editopen} title={"Edit details"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp>
              

        </div>
        )
    }
}

export default DashboardTable;