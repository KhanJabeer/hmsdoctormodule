import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Report from '../../images/report.jpg'
import './DealList.css'
import { Progress } from 'antd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Chart, Axis, Legend, Tooltip, Geom } from 'bizcharts';
import { apiurl } from "../../App";
import Axios from 'axios';
import dateFormat from 'dateformat';

const data = [
    { month: 'Jan.', count: 69, city: 'tokyo' }
];
const scale = {
    month: { alias: 'Month', },
    count: { alias: 'Sales', },
};

export default class DealList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            dealsList: []
        }
    }
    componentWillMount() {
        this.props.getDealsList()
    }

    render() {
        return (
            <div>
                <div className="paper_maincontainer">
                    <Grid container>
                        <Grid item xs={12} md={12} className="reportcontainer">
                            {
                                this.props.dealsList && this.props.dealsList.length > 0 &&
                                this.props.dealsList.map((val) => {
                                    return (
                                        <Paper className="firstpaper_test">
                                            <Grid container>
                                                <Grid item xs={6} md={6}>
                                                    <div className="date_view"><h5 className="list_test_report">All</h5></div>
                                                    <div className="date_view mt-2 mb-2">
                                                        <span>{dateFormat(val.deal_valid_from, "dd mmm yyyy")}</span> -
                                                        <span>{dateFormat(val.deal_valid_to, "dd mmm yyyy")}</span>
                                                    </div>
                                                    <div className="date_view">
                                                        {
                                                            val.deal_options === "Amount" ? `Amount: ${val.deal_amount} KWD`
                                                                :
                                                                `Percentage: ${val.dealAmount} %`
                                                        }
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} md={6}>
                                                    <h5 className="list_test_report">{val.deal_title}</h5>
                                                    <p className="view">{val.deal_active === 1 ? "Deal Active" : "Deal Not Active"}</p>
                                                    <div className="iconsdiv">
                                                        <EditIcon
                                                            className="edit_icon_div"
                                                            onClick={() => this.props.changeTab(val)} // changeTab from BookingDetails.jsx
                                                        />
                                                        <DeleteIcon className="delete_icon_div" />
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    )
                                })
                            }


                        </Grid>
                    </Grid>

                </div>
            </div>
        )
    }
}