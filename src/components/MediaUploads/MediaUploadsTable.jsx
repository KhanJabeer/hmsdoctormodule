import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./MediaUploadsTable.css"
import crowngold from "../../images/crown-golden.png";
import dateFormat from 'dateformat';
import Greenwalk from '../../images/greenwalk.png'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import MediaUploadsModal from './MediaUploadsModal'
import UploadMedia from './UploadMedia'
import Ordericon from '../../images/order.svg'
import ViewMedia from './ViewMedia'
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
                    { id: "order", label: "Order" },
                    { id: "customer", label: "Customer" },
                    { id: "gender", label: "Gender" },
                    { id: "age", label: "Age" },
                    { id: "date", label: "Date" },
                    { id: "time", label: "Time" },
                    { id: "", label: "Action" }
                ]}
  

            rowdata={[
                this.createData({order:<img src={Ordericon}/>, customer: "test", gender: "Male", age: "35", date:"11 Dec 2019", time: "10.00 AM"}),
                this.createData({order:<img src={Ordericon}/>, customer: "ashwin", gender: "Male", age: "35", date:"11 Dec 2019", time: "10.30 AM"}),
                this.createData({order:<img src={Ordericon}/>, customer: "syed", gender: "Male", age: "35", date:"11 Dec 2019", time: "11.30 AM"}),
                this.createData({order:<img src={Ordericon}/>, customer: "edwin", gender: "Male", age: "35", date:"11 Dec 2019", time: "11.30 AM"}),
                this.createData({order:<img src={Ordericon}/>, customer: "arjun", gender: "Male", age: "35", date:"11 Dec 2019", time: "11.30 AM"}),
                this.createData({order:<img src={Ordericon}/>, customer: "raja", gender: "Male", age: "32", date:"11 Dec 2019", time: "11.30 AM"}),
                this.createData({order:<img src={Ordericon}/>, customer: "rani", gender: "Male", age: "35", date:"11 Dec 2019", time: "11.30 AM"}),
            ]}

    tableicon_align={"cell_eye"}
    modelopen={(e)=>this.modelopen(e)}
    
  />
 
        
        <Modalcomp clrchange="text_color" visible={this.state.openview} title={"View Media"} closemodal={(e)=>this.closemodal(e)}
        
        >
          <ViewMedia/>
          
        </Modalcomp>
      

        <Modalcomp  clrchange="text_color" visible={this.state.editopen} title={"Edit Media Uploads"} closemodal={(e)=>this.closemodal(e)}
        
        >
          
          < MediaUploadsModal/>
        </Modalcomp>
              

        </div>
        )
    }
}

export default DashboardTable;