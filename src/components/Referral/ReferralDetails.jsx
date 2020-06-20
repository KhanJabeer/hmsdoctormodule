import React, { Component } from "react";
import { Tabs } from "antd";
import "./ReferralDetails.css";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Checkbox from "@material-ui/core/Checkbox";
import { Upload } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import "antd/dist/antd.css";
import { message, Button } from "antd";
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import SuccessModal from "./SuccessModal";
import Paper from '@material-ui/core/Paper';

export default class ReferralDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1",
    };
  }
  callback = (key) => {
    this.setState({
      activeKey: key,
    });
  };

  handleClickopen = () => {
    this.setState({ open: true });
  };
  handleClickclose = () => {
    this.setState({ open: false });
  };

  handleopen = () => {
    this.setState({ open: true });
  };
  handleclose = () => {
    this.setState({ open: false });
  };

  onChange = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  render() {
    const { TabPane } = Tabs;
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
    };
    return (
      <div>
        <Paper>
        <Tabs
          defaultActiveKey={"1"}
          activeKey={this.state.activeKey}
          onChange={this.callback}
          className="referral_tabs"
        >
          <TabPane tab="Doctor" key={"1"} className="ref_doc_pane">
            <div className="doc_pane_title">
              <div style={{ marginRight: "10px" }}>
                Patient Name : <span>Mohammed</span>
              </div>
              <div style={{ marginRight: "10px" }}>
                Age: <span>22 years</span>
              </div>
              <div>
                Gender: <span>Male</span>
              </div>
            </div>

            <Grid container>
              <Grid className="referal_rowone" item xs={12} md={3}>
                <div className="drop_doc">
                  <Labelbox
                    type="select"
                    labelname="Speciality"
                    value="Cardioliogist"
                  />
                </div>
              </Grid>

              <Grid className="referal_rowone" item xs={12} md={3}>
                <div className="drop_doc">
                  <Labelbox
                    type="select"
                    labelname="Doctor"
                    value="Abdul Rehman"
                    className="referral_dropdown"
                  />
                </div>
              </Grid>

              <Grid className="referal_rowone" item xs={12} md={4}>
                <div className="drop_doc_upload">
                  <Upload {...props}>
                    <Button className="upload_referral_btn">
                      Upload Document or Image <MdLinkedCamera className="camera_ref" />
                    </Button>
                  </Upload>
                </div>
              </Grid>

              <Grid className="referal_rowone" item xs={12} md={4}>
                <div className="drop_doc">
                  <Labelbox type="textarea" labelname="Remarks" />
                </div>
              </Grid>
            </Grid>
            <Button className="referral_button" onClick={this.handleClickopen}>
              Refer
            </Button>
          </TabPane>

          <TabPane tab="Lab" key="2" className="ref_lab_pane">
          <div className="doc_pane_title">
              <div style={{ marginRight: "10px" }}>
                Patient Name : <span>Mohammed</span>
              </div>
              <div style={{ marginRight: "10px" }}>
                Age: <span>22 years</span>
              </div>
              <div>
                Gender: <span>Male</span>
              </div>
            </div>
            <div>
              <div className="sticky_div">
<Grid container className="lab_pane_container">
  <Grid className="sticky_div_one" item xs={8} md={3}>
            <div className="test_lab_title">Test</div>
            <div className="lab_pane_test">
            <div className="lab_test_name">Kidney Function Test</div>
              <Checkbox className="referral_labtest_checkbox"/>
            </div>
            <div className="lab_pane_test">
              <div className="lab_test_name" >Liver Function Test</div>
              <Checkbox className="referral_labtest_checkbox" defaultChecked/></div>
              <div className="lab_pane_test">
              <div className="lab_test_name">Gastric Fluid Analysis</div>
              <Checkbox className="referral_labtest_checkbox"/></div>
              <div className="lab_pane_test">
              <div className="lab_test_name" >Pregnancy Test</div>
              <Checkbox className="referral_labtest_checkbox" defaultChecked/></div>
              <div className="lab_pane_test">
              <div className="lab_test_name">Thyroid Function Test</div>
              <Checkbox className="referral_labtest_checkbox" /></div>
              </Grid>    </Grid>

              <Grid container className="labepane_container2">
              <Grid className="referal_rowone" item xs={12} md={4}>
                <div className="drop_doc">
                  <Labelbox
                    type="select"
                    labelname="Speciality"
                    value="Cardioliogist"
                  />
                </div>
              </Grid>

              <Grid className="referal_rowone" item xs={12} md={4}>
                <div className="drop_doc">
                  <Labelbox
                    type="select"
                    labelname="Doctor"
                    value="Abdul Rehman"
                    className="referral_dropdown"
                  />
                </div>
              </Grid>

              <Grid className="referal_rowone" item xs={12} md={3}>
                <div className="drop_doc_upload">
                  <Upload {...props}>
                    <Button className="upload_referral_lab_btn">
                      Upload Document or Image <MdLinkedCamera className="camera_ref" />
                    </Button>
                  </Upload>
                </div>
              </Grid>
           
           
              
           
          <Grid container>
            <Grid className="referal_rowone" item xs={12} md={12}>
                <div className="drop_doc doc_txtarea">
                  <Labelbox type="textarea" labelname="Remarks" />
                </div>
              </Grid></Grid>

                 </Grid>
                 <Button className="referral_button" onClick={this.handleopen}>
              Refer
            </Button>
                 </div>
                 </div>
          </TabPane>
        </Tabs>

        <Modalcomp
          xswidth={"xs"}
          visible={this.state.open}
          title="Success"
          closemodal={this.handleClickclose}
        >
          <SuccessModal closemodal={this.handleClickclose} />
        </Modalcomp>

        <Modalcomp
          xswidth={"xs"}
          visible={this.state.open}
          title="Success"
          modalclose={this.handleclose}
        >
          <SuccessLabModal modalclose={this.handleclose} />
        </Modalcomp>

        </Paper>
      </div>
    );
  }
}
