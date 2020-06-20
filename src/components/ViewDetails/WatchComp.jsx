import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Labelbox from "../../helpers/labelbox/labelbox";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Report from '../../images/report.jpg'
import './WatchComp.css'
import { Progress } from 'antd';
import Heart from '../../images/heart.svg'
import Sleep from '../../images/sleep.svg'
import Steps from '../../images/steps.svg'
import Running from '../../images/running.svg' 
// import { ChartCard, MiniBar } from '@/components/Charts';
import {  Icon } from 'antd';
import Chart from './chart'
const data1 = [
  { month: 'Jan.', count: 69, city: 'tokyo' }
];
const scale = {
  month: {alias: 'Month',},
  count: {alias: 'Sales',},
};

const data = [{year:"we"}];

//         const data = [
//           { year: '1951 年', sales: 38 },
//           { year: '1952 年', sales: 52 },
//           { year: '1956 年', sales: 61 },
//           { year: '1957 年', sales: 145 },
//           { year: '1958 年', sales: 48 },
//           { year: '1959 年', sales: 38 },
//           { year: '1960 年', sales: 38 },
//           { year: '1962 年', sales: 38 },
//         ];
//         const cols = {
//           'sales': {tickInterval: 20},
//         };
        
// const visitData = [
//     {
//       x: '2017-09-01',
//       y: 100,
//     },
//     {
//       x: '2017-09-02',
//       y: 120,
//     },
//     {
//       x: '2017-09-03',
//       y: 88,
//     },
//     {
//       x: '2017-09-04',
//       y: 65,
//     },
//   ];
export default class WatchDetails extends React.Component{
constructor(props)
{
super(props)
   this.state={name:""}
}
render()
{
    return(
       <div>
           <div className="paper_maincontainer">
        
               <Paper className="paper_container">
               <div className="heart_div"><div className="watch_diff"><img src={Steps}/><p className="watch_item">Steps</p></div>
                   <div className="heart_rate"><p className="heartdate_per">1100</p></div>
                  
                   </div>
                   <div className="chart_container">
                      {/* <Chart height={400} data={data} scale={scale} forceFit>
                         <Axis title name="month" />
                         <Axis title name="count" />
                         <Legend />
                         <Tooltip crosshairs={{ type: 'rect' }} />
                         <Geom type="interval" position="month*count" color="month" />
                       </Chart> */}
                         {/* <Chart height={82} width={100} data={data} scale={cols} forceFit>
            <Axis name="year" />
            <Axis name="sales" />
            <Tooltip crosshairs={{type : "y"}}/>
            <Geom type="interval"  />
          </Chart> */}
          {/* <ChartCard
    title="Payments"
    action={
      <Tooltip title="Payments reflect the quality of transaction">
        <Icon type="exclamation-circle-o" />
      </Tooltip>
    }
    total="6,500"
    contentHeight={46}
  >
    <MiniBar height={46} data={visitData} />
  </ChartCard> */}
 
               <Chart/>

                       </div>
               </Paper>
               <Paper className="paper_container">
               <div className="heart_div"><div className="watch_diff"><img src={Heart}/><p className="watch_item">Heart Rate</p></div>
                   <div className="heart_rate"><p className="heartdate_per">78</p><p className="heart_date">Bpm</p></div>
                   
                  
                   </div>
                   <div className="progress_container"><Progress percent={100} status="active" className="heart_rate_progress"/></div>
               </Paper>
               <Paper className="paper_container">
               <div className="heart_div"><div className="watch_diff"><img src={Sleep}/><p className="watch_item">Sleep</p></div>
                   <div className="heart_rate"><p className="heartdate_per">0</p><p className="heart_date">H</p>
                   <p className="heartdate_per">0</p><p className="heart_date">M</p></div>
                  
                   </div>
                   <div className="progress_container"><Progress percent={100} status="active" className="sleep_progress"/></div>
               </Paper>
               
           </div>
           <div className="secondpaper_maincontainer">
           <Paper className="paper_container">
               <div className="heart_div"><div className="watch_diff"><img src={Running}/><p className="watch_item">Running</p></div>
                   <div className="heart_rate"><p className="heartdate_per">0</p><p className="heart_date">H</p>
                   <p className="heartdate_per">0</p><p className="heart_date">M</p></div>
                  
                   </div>
                   <div className="progress_container"><Progress percent={100} status="active" className="running_progress"/></div>
               </Paper>
           </div>
       </div>
    )
}
}

    