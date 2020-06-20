
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import './Drawerpage.css'
import { Dropdown } from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../images/11.jpg'
import Badge from '@material-ui/core/Badge';
import bell from '../../images/bell.png'
import Logo from '../../images/Logo.png'
import home_svg from '../../images/home_svg.svg'
import queue_svg from '../../images/queue_svg.svg'
import schedule_svg from '../../images/schedule_svg.svg'
import advertise_svg from '../../images/advertise_svg.svg'
import revenue_svg from '../../images/revenue_svg.svg'
import upload_svg from '../../images/upload_svg.svg'
// import Appointment from '../../images/appointment.svg'
import Appointment from '../../images/appoint.png'
import Cancel from '../../images/cancel.svg'
import Availability from '../../images/availability.svg'
import Total from '../../images/total.svg'
import { Menulist, MenuItem, ListItemText, ListItemIcon, MenuList, } from "@material-ui/core";
import { Link } from "react-router-dom";
import calendar_svg from '../../images/calendar_svg.svg'
import ReactSVG from 'react-svg'
import Paper from '@material-ui/core/Paper';
import Profilepage from '../LabProfile/Profilepage'
import ProfileLogout from '../../components/ProfileLogout/ProfileLogout'
import Deals from '../../images/deals.svg'
import Report from '../../images/report.svg'
import Profile from '../../images/profile.svg'
import Manage from '../../images/manage.svg'
import Appoint from '../../images/Appoint.svg'
import ProfileComp from '../../components/LabProfile/ProfileComp'
import Medicine from '../../images/medicine.svg'
import AdvertiseBook from '../../images/Advertisebook.svg';

import Login from '../../components/Login/Login'
import Forgot from '../../components/Login/Forgot'
import DashboardMaster from '../../components/DoctorDashboard/DashboardMaster'
import ResetPassword from '../../components/Login/ResetPassword' ;
import ViewDetailsMaster from '../../components/ViewDetails/ViewDetailsMaster';
import AdvertisementMaster from '../../components/AdvertisementBooking/AdvertisementMaster';
import AvailabilityMaster from '../../components/Availability/AvailabilityMaster';
import QueueComp from "../Queuecomp/queuecomp";
import AppointmentsDashboard from '../AppointmentList/AppointmentsDashboard';
import AppointmentMaster from "../../components/AppointmentShedule/AppointmentMaster";
import CancelledDashboard from '../../components/CancelledHistory/CancelledDashboard';
import ManageServiceMaster from '../../components/ManageService/ManageServiceMaster';
import DealsMaster from '../../components/Deals/DealsMaster';
import CancelSlotMaster from '../../components/CancelSlot/CancelSlotMaster';
import MediaUploadsMaster from '../../components/MediaUploads/MediaUploadsMaster';
import PaymentMethod from '../../components/CancelPayment/PaymentMethod';
import PaymentReceived from '../../components/PaymentReceived/PaymentReceived';
import DoctorServiceMaster from '../../components/DoctorService/DoctorServiceMaster';
import DoctorLogin from "../../components/Login/Login.jsx";
import Revenuemaster from '../../components/Revenue/RevenueMaster';


import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReferralMaster from '../Referral/ReferralMaster';


const drawerWidth = 260;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 100,
    marginRight: 36,
    FontSize: 10,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false, logout: false,
    custom_hide: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  viewmodalOpen = () => {
    this.setState({ viewmodal: true })
  }
  viewmodalClose = () => {
    this.setState({ viewmodal: false })
  }
  logoutOpen = () => {
    this.setState({ logout: !this.state.logout })

  }
  logoutClose = () => {
    this.setState({ logout: false })
  }
  //  handleClick=()=>{
  //   // this.props.history.push("/profile");
  //   this.setState({

  //   })
  // }
  render() {
    const { classes, theme, children } = this.props;
    // if(this.state.custom_hide){
    //   if(window.location.href.includes("/profile")){
    //     this.setState({
    //       viewmodal:true,
    //       custom_hide:false
    //     })
    //   }
    // }

    return (
      <div className="drawerpage_container">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar disableGutters={!this.state.open}>
              <div className="drawer-logo-container"><img className="logo" src={Logo} alt="logo" /></div>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <div className={`${this.state.open ? "dropdown-container" : "dropdown-container_close"}`}>
                <Dropdown >

                  <Badge color="secondary" variant="dot" className={classes.margin}>
                    <div className="notification-icon"> <img className="notification" src={bell} /></div>
                  </Badge>
                  <Dropdown.Toggle variant="my_style" id="dropdown-basic" onClick={this.logoutOpen}>
                    My Profile
  </Dropdown.Toggle>

                  {/* <Dropdown.Menu className="dropdown-menu" >
     <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item> 
  </Dropdown.Menu>  */}
                </Dropdown>
                {this.state.logout === true && <div><ProfileLogout open={this.state.logout} onClose={this.logoutClose} />
                </div>}
                <div className="date-wrapper1">
                  <div className="date-wrapper2">

                    <large className="date">04-09-2019 10.00am</large>
                  </div>
                </div>
              </div>

              <Avatar className="Avatar-image" alt="avatar-missing" src={avatar} className={classes.avatar} />

            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />

            <MenuList className="appbar_sideicons">

              <MenuItem component={Link} to="/Home/Dashboard">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={home_svg} /></div>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </MenuItem>


              <MenuItem component={Link} to="/Home/appointments">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={Appoint} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Appointments" />
              </MenuItem>
              <MenuItem component={Link} to="/Home/doctorservice">
                <ListItemIcon>
                  <div className="icon-container">
                    <ReactSVG src={Medicine} /></div>
                </ListItemIcon>
                <ListItemText primary="Doctor Service" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/AppointShedule">
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={Availability} /></div>
                </ListItemIcon>
                <ListItemText primary="Appointment Schedule" />
              </MenuItem>
              <MenuItem component={Link} to="/Home/queue" >
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={queue_svg} /></div>
                </ListItemIcon>
                <ListItemText primary="Queue" />
              </MenuItem>
              <MenuItem component={Link} to="/Home/cancelhistory" >
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={Cancel} /></div>
                </ListItemIcon>
                <ListItemText primary="Cancel History" />
              </MenuItem>
              {/* <MenuItem component={Link} to="/availability">
              <ListItemIcon>
              <div className="icon-container"><ReactSVG  src={calendar_svg} /></div>
              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </MenuItem>
           */}


              <MenuItem component={Link} to="/Home/availability">
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={schedule_svg} /></div>
                </ListItemIcon>
                <ListItemText primary="Availability" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/revenue">
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={revenue_svg} /></div>
                </ListItemIcon>
                <ListItemText primary="Revenue" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/advertise">
                <ListItemIcon >
                  <div className="icon-container"><ReactSVG src={AdvertiseBook} /></div>
                </ListItemIcon>
                <ListItemText primary="Advertisement" />
              </MenuItem>



              <MenuItem component={Link} to="/Home/deals">
                <ListItemIcon>
                  <div className="icon-container"><div><ReactSVG src={Deals} /></div></div>
                </ListItemIcon>
                <ListItemText primary="Deals" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/cancelslot">
                <ListItemIcon>
                  <div className="icon-container"><div><ReactSVG src={Cancel} /></div></div>
                </ListItemIcon>
                <ListItemText primary="Cancel Slot" />
              </MenuItem>
              {/* <MenuItem component={Link} to="/manageservice">
              <ListItemIcon>
              <div className="icon-container">
                <ReactSVG  src={Manage}/>
              </div>  
               </ListItemIcon>
               <ListItemText  primary="Appointments" />
            </MenuItem> */}

              <MenuItem component={Link} to="/Home/mediaupload">
                <ListItemIcon>
                  <div className="icon-container"><div><ReactSVG src={upload_svg} /></div></div>
                </ListItemIcon>
                <ListItemText primary="MediaUploads" />
              </MenuItem>

              <MenuItem component={Link} to="/Home/back" onClick={this.viewmodalOpen}>
                <ListItemIcon>
                  <div className="icon-container"><div><ReactSVG src={Profile} /></div></div>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </MenuItem>
              
              <MenuItem component={Link} to="/Home/referral" >
                <ListItemIcon>
                  <div className="icon-container"><div><ReactSVG src={upload_svg} /></div></div>
                </ListItemIcon>
                <ListItemText primary="Referral" />
              </MenuItem>

              <MenuItem >
                <ListItemIcon>
                  <div className="icon-container"><div><ReactSVG src={Report} /></div></div>
                </ListItemIcon>
                <ListItemText primary="Report" />
              </MenuItem>
            </MenuList>



          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route path={`${this.props.match.path}/revenue`}  component={Revenuemaster} exact />
            <Route path={`${this.props.match.path}/viewdetails`} component={ViewDetailsMaster} exact />
            <Route path={`${this.props.match.path}/advertise`} component={AdvertisementMaster} exact />
            <Route  path={`${this.props.match.path}/availability`} component={AvailabilityMaster} exact />
            <Route path={`${this.props.match.path}/queue`}   component={QueueComp} exact />
            <Route path={`${this.props.match.path}/appointments`}  component={AppointmentsDashboard} exact />
            <Route path={`${this.props.match.path}/AppointShedule`}  component={AppointmentMaster} exact />
            <Route path={`${this.props.match.path}/cancelhistory`}  component={CancelledDashboard} exact />
            <Route  path={`${this.props.match.path}/manageservice`} component={ManageServiceMaster} exact />
            <Route path={`${this.props.match.path}/deals`} component={DealsMaster} exact />
            <Route path={`${this.props.match.path}/cancelslot`} component={CancelSlotMaster} exact />
            <Route path={`${this.props.match.path}/mediaupload`}  component={MediaUploadsMaster} exact />
            <Route  path={`${this.props.match.path}/payment`} component={PaymentMethod} exact />
            <Route path={`${this.props.match.path}/profile`}  component={Profilepage} exact />
            <Route path={`${this.props.match.path}/referral`}  component={ReferralMaster} exact />
            <Route path={`${this.props.match.path}/paymentReceive`}  component={PaymentReceived} exact />
            <Route path={`${this.props.match.path}/back`}  component={ProfileComp} exact />
            <Route path={`${this.props.match.path}/doctorservice`} component={DoctorServiceMaster} exact />
            <Route path={`${this.props.match.path}/Dashboard`} component={DashboardMaster} exact />

            
            <div>
              {children}
              {/* <Profilepage open={this.state.viewmodal} onClose={this.viewmodalClose}/>
        {this.state.viewmodal&&<ProfileComp/>} */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
