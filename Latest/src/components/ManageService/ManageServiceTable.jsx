import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./ManageServiceTable.css"
import crowngold from "../../images/crown-golden.png";
import dateFormat from 'dateformat';
import Greenwalk from '../../images/greenwalk.png'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import ManageServiceModal from './ManageServiceModal'
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
                    { id: "customer", label: "Customer" },
                    { id: "date", label: "Date" },
                    { id: "cancel", label: "Cancelled Date" },
                    { id: "", label: "Action" },
                    
                ]}
  

            rowdata={[
                this.createData({customer: "test", date:"11 Dec 2010", cancel:"12 Apr 2010"}),
                this.createData({customer: "ashwin",  date:"11 Dec 2010", cancel:"12 Apr 2010"}),
                this.createData({customer: "syed",  date:"11 Dec 2010", cancel:"12 Apr 2010"}),
                this.createData({customer: "edwin",  date:"11 Dec 2010", cancel:"12 Apr 2010"}),
                this.createData({customer: "arjun",  date:"11 Dec 2010", cancel:"12 Apr 2010"}),
                this.createData({customer: "raja",  date:"11 Dec 2010", cancel:"12 Apr 2010"}),
                this.createData({customer: "rani",  date:"11 Dec 2010", cancel:"12 Apr 2010"}),
            ]}

    tableicon_align={""}
    modelopen={(e)=>this.modelopen(e)}
  />

        <Modalcomp  visible={this.state.editopen}  clrchange="text_clr_change" title={"ADD SERVICE"} closemodal={(e)=>this.closemodal(e)}
        >
          <ManageServiceModal/>
        </Modalcomp>
              

        </div>
        )
    }
}

export default DashboardTable;