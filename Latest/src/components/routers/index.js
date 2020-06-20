import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Drawerpage from "../../components/Drawer page/Drawerpage";
import Login from '../../components/Login/Login'
import Forgot from '../../components/Login/Forgot'
import DashboardMaster from '../../components/DoctorDashboard/DashboardMaster'
import ResetPassword from '../../components/Login/ResetPassword' 
import ViewDetailsMaster from '../../components/ViewDetails/ViewDetailsMaster'
import AdvertisementMaster from '../../components/AdvertisementBooking/AdvertisementMaster'
import AvailabilityMaster from '../../components/Availability/AvailabilityMaster'
import QueueComp from "../Queuecomp/queuecomp";
import AppointmentsDashboard from '../AppointmentList/AppointmentsDashboard'
import AppointmentMaster from "../../components/AppointmentShedule/AppointmentMaster"
import CancelledDashboard from '../../components/CancelledHistory/CancelledDashboard'
import ManageServiceMaster from '../../components/ManageService/ManageServiceMaster'
import DealsMaster from '../../components/Deals/DealsMaster'
import CancelSlotMaster from '../../components/CancelSlot/CancelSlotMaster';
import MediaUploadsMaster from '../../components/MediaUploads/MediaUploadsMaster'
import PaymentMethod from '../../components/CancelPayment/PaymentMethod'
import Profilepage from '../../components/LabProfile/Profilepage'
import PaymentReceived from '../../components/PaymentReceived/PaymentReceived'
import ProfileComp from '../../components/LabProfile/ProfileComp'
import DoctorServiceMaster from '../../components/DoctorService/DoctorServiceMaster'
import DoctorLogin from "../../components/Login/Login.jsx";
// import TodayAppointmentsDashboard from '../../components/AppointmentList/TodayAppointmentsDashboard'
// import AdvertisementMaster from '../../components/AdvertisementBooking/AdvertisementMaster'
// import QueueComp from "../Queuecomp/queuecomp";

// import AdvertisementMaster from '../../components/AdvertisementBooking/AdvertisementMaster'




// import TodayAppointmentsDashboard from '../../components/TodayAppointments/TodayAppointmentsDashboard'

// import UploadsMaster from '../../components/Upload/UploadsMaster'
import Revenuemaster from '../../components/Revenue/RevenueMaster';
import ReferralMaster from "../Referral/ReferralMaster";


// import PaymentReceived from '../../components/PaymentReceived/PaymentReceived'
const AppRouter = () => (
  <div>
     <DoctorLogin />
  
  <BrowserRouter>
    <Drawerpage>

      <Switch>
      {/* <Route path="/" component={Login} exact/> */}
        {/* <Route path="/" component={Login}  exact/> */}
     
        {/* <Route path="/forgot" component={Forgot} exact/> */}
        {/* <Route path="/ResetPassword" component={ResetPassword} exact/>   */}
        <Route path="/revenue" component={Revenuemaster} exact/>  
        <Route path="/viewdetails" component={ViewDetailsMaster}  exact/>
        <Route path="/advertise" component={AdvertisementMaster}  exact/>
        <Route path ="/availability" component={AvailabilityMaster} exact/>
        <Route path="/queue" component={QueueComp} exact/>
        <Route path="/appointments" component={AppointmentsDashboard} exact/>
        <Route path="/advertise" component={AdvertisementMaster}  exact/> 
        <Route path="/AppointShedule" component={AppointmentMaster}  exact/>   
        <Route path="/cancelhistory" component={CancelledDashboard} exact/>  
        <Route path="/manageservice" component={ManageServiceMaster}  exact/>
        <Route path="/deals" component={DealsMaster}  exact/>         
        <Route path="/cancelslot" component={CancelSlotMaster}  exact/> 
        <Route path="/mediaupload" component={MediaUploadsMaster} exact/>
        <Route path="/payment" component={PaymentMethod} exact/>
        <Route path="/profile" component={Profilepage} exact/>
        <Route path="/referral" component={ReferralMaster} exact/>
        <Route path="/paymentReceive" component={PaymentReceived} exact/>
        <Route path="/back" component={ProfileComp} exact/>
        <Route path="/doctorservice" component={DoctorServiceMaster} exact/>
        
      </Switch>
    </Drawerpage>
  </BrowserRouter>

  </div>

);
export default AppRouter;
