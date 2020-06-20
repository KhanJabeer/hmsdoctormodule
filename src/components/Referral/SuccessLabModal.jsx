import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Labelbox from '../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';

import uploadimage from '../../images/upload-button.png'
import Profile from '../../images/1.jpg' 
export default class SuccessModal extends Component {
    render() {
        return (
            <div className="record_delete_container"> 
                <Grid container>
                    <Grid item xs={12} md={12} className="media_title_container">
                      <div className="mediadelete_container">
                          <p className="delete_para">Referral has been sent to the Patient and the Lab</p></div>
                           <div className="mediadelete_container">
                           
                           <Button className="detete_yes"  onClick={()=>this.props.modalclose(false)}>Ok</Button></div>
                      
                    </Grid>
                </Grid>
            </div>
        )
    }
}