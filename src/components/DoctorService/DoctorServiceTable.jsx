import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./DoctorServiceModal.css"
import dateFormat from 'dateformat';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import DoctorServiceModal from './DoctorServiceModal'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { apiurl } from "../../App";
import DeleteMedia from '../../helpers/ModalComp/deleteModal';
import Plus from '../../images/plus.png'
import { Input } from 'antd';


const { Search } = Input;

const current_date = (dateFormat(new Date(), "dd mmm yyyy"));

class DashboardTable extends React.Component {

    state = {
        openview: false, open: true,
        tableData: [],
        searchValue: '',
        insertOpen: false,
        deleteopen: false,
        loading: true,
        props_loading: false,
    }

    createData = (parameter) => {
        var keys = Object.keys(parameter)
        var values = Object.values(parameter)

        var returnobj = {}

        for (var i = 0; i < keys.length; i++) {
            returnobj[keys[i]] = values[i]
        }
        return (returnobj)
    }

  
    modelopen = (data,id) => {
        if (data === "view") {
            this.setState({ openview: true })
        }
        else if (data === "edit") {
            this.setState({ editopen: true })
            this.setState({
                editData:this.state.totalData.find(val => val.id === id)
            })
        }
    }

    insertModalOpen = () => {
        this.setState({
            insertOpen: true
        })
    }

    closemodal = () => {
        this.setState({ openview: false, editopen: false, insertOpen: false })
    }

    iconclick = () => {
        this.setState({ open: true })

    }
    handleClose = () => {
        this.setState({ open: false })
    }

    componentDidMount() {
        this.getTableData()
        // alert(JSON.stringify(this.state.tableData))
    }

    getTableData = () => {
        var tableData = [];
        var self = this
        axios({
            method: 'get',
            url: apiurl + '/get_mas_doctor_service_type',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.data.data.map((val) => {
                tableData.push({ service: val.service_type, cost: val.total, slot: val.slot, id: val.id })
            })
            self.setState({
                tableData,
                props_loading: false,
                totalData:response.data.data

            })
        }).catch((error) => {
            alert(JSON.stringify(error))
        })

    }

    deleteopen = (type, id) => {
        this.setState({
            deleteopen: true,
            iddata: id
        })
    }


    deleterow = () => {
        this.setState({ props_loading: true })

        var self = this
        axios({
            method: 'delete',
            url: apiurl + '/delete_mas_doctor_service_type',
            data: {
                "id": this.state.iddata,
            }
        })
            .then(function (response) {
                console.log(response, "deleteres")
                self.getTableData()
            })
            .catch(function (error) {
                console.log(error, "error");
            });
        this.setState({
            Deletemodalopen: false
        })
        this.setState({ props_loading: false })


    }

    closemodal = () => {
        this.setState({ openview: false, insertOpen: false, editopen: false, Deletemodalopen: false, deleteopen: false })
    }
    searchData = (e) => {
        this.setState({
            searchValue: e.target.value
        })
        this.setState({})
    }

    render() {
        console.log(this.state.tableData, "tabledata")
        var tableData = this.state.tableData;
        const searchString = this.state.searchValue.trim().toLowerCase();
        if (this.state.searchValue.length > 0) {
            tableData = this.state.tableData.filter((val) => {
                return (
                    val.service.toLowerCase().match(searchString) || val.cost.toString().toLowerCase().match(searchString)

                )
            })
            // Data.map((val,index)=> val[myKeys[index]].toString().toLowerCase().match("n"))  -> Handling for dynamic bt its not working *Need to implement*

            // alert(JSON.stringify(tableData))
        }

        return (
            <>
                <div className="uploadsmasterheader">
                    <div className="titlerevenue">DOCTOR SERVICE</div>
                    <Search
                        placeholder=" search "
                        onSearch={value => console.log(value)}
                        onChange={(e) => this.searchData(e)}
                        style={{ width: 150 }}
                        className="search_box_container"
                    />
                    <img src={Plus} onClick={this.insertModalOpen} className="plus-icon" />
                </div>
                <div>
                    <Tablecomponent

                        heading={[
                            { id: "sno", label: "S.No" },
                            { id: "service", label: "Service" },
                            { id: "cost", label: "Cost (KWD)" },
                            { id: "slot", label: "Slot" },
                            // { id: "duration", label: "Duration( Min )" },
                            { id: "action", label: "Action" },

                        ]}
                        rowdata={tableData}
                        tableicon_align={" "}
                        modelopen={(e, id) => this.modelopen(e, id)}
                        VisibilityIcon="close"
                        deleteopen={this.deleteopen}
                        props_loading={this.state.props_loading}

                    />

                    {/* <Modalcomp  visible={this.state.openview} title={"View details"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp> */}
                    {/* <MedicineModal open={this.state.open} onClose={this.handleClose} xswidth={"xs"} /> */}

                    <Modalcomp clrchange="text_color" visible={this.state.insertOpen ? this.state.insertOpen : this.state.editopen} title={this.state.insertOpen === true ? "Add Service" : "Edit Service"} closemodal={(e) => this.closemodal(e)}
                        xswidth={"md"}
                    >
                        <DoctorServiceModal
                            btnProps={this.state.insertOpen}
                            getTableData={this.getTableData}
                            closemodal={() => this.closemodal()}
                            editData={this.state.editData}
                            editOpenModal={this.state.editopen && true}
                        />
                    </Modalcomp>
                    <Modalcomp visible={this.state.deleteopen} title={"Delete"} closemodal={this.closemodal} customwidth_dialog="cus_wid_delmodel" xswidth={"xs"}>
                        <DeleteMedia deleterow={this.deleterow} closemodal={this.closemodal} />
                    </Modalcomp>
                </div>
            </>

        )
    }
}

export default DashboardTable;
