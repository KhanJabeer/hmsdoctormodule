import React, { Component } from "react";
import { Tabs } from "antd";
import './ReferralDetails.css'
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import { Upload } from 'antd';
import { MdLinkedCamera } from "react-icons/md";
import 'antd/dist/antd.css';
import { message, Button } from 'antd';



export default class ReferralDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            activeKey: "1",
        }
    }
  callback = (key) => {
    this.setState({
      activeKey: key,
    });
  };

  onChange=(info) => {
   
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

 

  render() {
    const { TabPane } = Tabs;
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      }}
    return (
      <div>
        <Tabs
          defaultActiveKey={"1"}
          activeKey={this.state.activeKey}
          onChange={this.callback}
          className="referral_tabs"
        >
          <TabPane tab="Doctor" key={"1"} className="ref_doc_pane">
              <div className="doc_pane_title">
                  <div style={{marginRight:"10px"}}>Patient Name : <span>Mohammed</span></div>
                  <div style={{marginRight:"10px"}}>Age: <span>22 years</span></div>
                  <div>Gender: <span>Male</span></div>
              </div>

              <Grid container>
                <Grid item xs={12} md={3}>
                  <div className="drop_doc">
                <Labelbox
                    type="select"
                    labelname="Speciality"
                    value="Cardioliogist"
                />
                  </div>
              
                </Grid>

                <Grid item xs={12} md={3}>
                  <div className="drop_doc">
                <Labelbox
                    type="select"
                    labelname="Doctor"
                    value="Abdul Rehman"
                    className="referral_dropdown"
                />
                </div>
                  </Grid>

                  <Grid item xs={12} md={4}>
                  <div className="drop_doc_upload">
                  <Labelbox
                   
                />
                  <Upload {...props}>
                    <Button className="upload_referral_btn">
                    Upload Document or Image <MdLinkedCamera />
                    </Button>
                  </Upload>
                  </div>
                  
                  </Grid>

                  <Grid item xs={12} md={4}>
                  <div className="drop_doc">
                  <Labelbox
                    type="textarea"
                    labelname="Remarks"
                   
                />
                  </div>

                  </Grid>
              </Grid>
              <Button className="referral_button">Refer</Button>
          </TabPane>





          <TabPane tab="Lab" key="2" className="ref_lab_pane">

          </TabPane>
        </Tabs>
      </div>
    );
  }
}
