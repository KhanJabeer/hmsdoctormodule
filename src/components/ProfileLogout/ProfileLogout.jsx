import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../images/11.jpg'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './ProfileLogout.css'
export default class ProfileLogout extends React.Component{
 constructor(props)
 {
     super(props)
     this.state={logout:false}
 }
 logoutOpen=()=>{
    this.setState({logout:true})
    
  }
  // logoutClose=()=>
  // {
  //   this.props.onClose(this.props.selectedValue);
  // }
  
 

 render()
 {
  const { classes, onClose, cancel, selectedValue, ...other } = this.props;
     return(
         <div>
             <div className="avatar_div"><Paper className="avatar_container">
             <div  className="profile_logout_container"><img className="profile_logout_image" src={avatar}/></div>
             <div className="profile_logout_container"><div><h6 className="name_head">Aamina</h6>
             <p>aamina@gmail.com</p>
             </div>
            
             </div>
             <Divider/>
             <div className="profile_logout_butt"><p>Profile</p><Button className="logout_butt" onClick={this.props.onClose}>Logout</Button></div>
             <Divider/>
             <div className="profile_logout_privacy "><p>Privacy Policy Terms of Service</p></div>
           </Paper>
           </div>
         </div>
     )
 }
}