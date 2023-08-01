//  useralldataDiv width is 100% and this classaccessed in every component  
//   .customerInput className css define in {addcustomer.css}
import React, { useState, useEffect } from "react";
import './customer.css'
import TextField from '@mui/material/TextField';
import { MdOutlineClear } from 'react-icons/md'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { RiSave3Fill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';
import { GrHomeRounded } from 'react-icons/gr';
import swal from 'sweetalert';
import { assignedToNameList } from '../menuData';
import { useNavigate, useParams } from "react-router-dom";

const Showleas = () => {
    const { id } = useParams();
    const [leadData, setleadData] = useState({
        projectTitle: "",
        projectDescr: "",
        dueDate: "",
        customername: "",
        monthlyRevenue: "",
        agginedTO: "",
        closeTime:"-",
    });
    const [companyNames, setcompanyName] = useState([]);
    const navogate = useNavigate();

    const gotoMainleadPage = () => {
        navogate("/");
    }
    const gobackPage = () => {
        navogate(-1);
    }

    useEffect(() => {
        // fetching api of contact form from local db.json file
        // and dispaly the name of company in company name input box
        fetch(`http://localhost:3000/customerData?id=${id}`).then((res) =>
            res.json()
        ).then((response) =>
            setcompanyName(response)
        );
    },[id]);

    let name, value;
    const handleChangeLead = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(value);
        setleadData({ ...leadData, [name]: value });
    }

    const sendCistomerData = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:3000/customerData/${id}`, {
                method: "PATCH",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(leadData),
            }).then(() => {
                gotoMainleadPage();
                swal("Lead Assigned", "", "success")

            }).catch(() => {
                swal("Not Submitted", "Try Again", "error")

            });
        } catch (e) {
            console.log("error catch");
        }
    }
    return (
        <>
            <div className="useralldataDiv">
                <div className="master">
                    <div className="customer_sub_div">
                        <form onSubmit={sendCistomerData} name="formReset">
                            <div className="h1andBtn  bg-white">
                                <div className="gobackAndh4Div d-flex">
                                    <AiOutlineRollback className="custo_gobk_arr text-dark" onClick={gobackPage} />
                                    <GrHomeRounded className="custo_gobk_arr" onClick={gotoMainleadPage} />
                                    <h4 className="h4class btn bg-light text-dark m-2">Assigned Lead</h4>
                                </div>
                                <div className="bothBTN">
                                    <label className="btnTop btn btn-secondary m-2 border-0" htmlFor="cnlBTN">Clear <MdOutlineClear /> </label>
                                    <label className="btnTop  btn btn-primary m-2 text-white border-0" htmlFor="ubmit">Save<RiSave3Fill /></label>
                                </div>
                            </div>
                            <div className="customerFormDiv">
                                <div className="input_field justify-content-start bg-white">
                                    {/* this line of code help to display the name of company which already listed in the customer json file*/}
                                    <div className="outerInput">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel>Company Name</InputLabel>
                                                <Select
                                                    id="companyName"
                                                    name="companyName"
                                                    value={leadData.companyName}
                                                    label="Assigned To"
                                                    onChange={handleChangeLead}
                                                    className="selectCo"
                                                    required
                                                >
                                                    {
                                                        companyNames.map((assignTo) => (
                                                            <MenuItem value={assignTo.companyName} key={assignTo.id}>{assignTo.companyName}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    {/*      this line of code add show the name of member how are added in the customer    */}
                                    <div className="outerInput">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel>Customer Name</InputLabel>
                                                <Select
                                                    id="customername"
                                                    name="customername"
                                                    value={leadData.customername}
                                                    label="Customer Name"
                                                    onChange={handleChangeLead}
                                                    className="selectCo"
                                                    required
                                                >
                                                    {
                                                        companyNames.map((assignTo) => (
                                                            <MenuItem value={`${assignTo.value} ${assignTo.fname} ${assignTo.lname}`} key={assignTo.id}>
                                                                {`${assignTo.value} ${assignTo.fname} ${assignTo.lname}`}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <div className="outerInput">
                                        <TextField id="projectTitle" type='text' name="projectTitle" label="Project Title" variant="outlined" className="customerInput"
                                            autoComplete="off" required value={leadData.projectTitle} onChange={handleChangeLead} /><br />
                                    </div>
                                    <div className="outerInput">
                                        <TextField id="projectDescr" type='text' name="projectDescr" label="Project Description" required variant="outlined" className="customerInput"
                                            autoComplete="off" value={leadData.projectDescr} onChange={handleChangeLead} /><br />
                                    </div>
                                    <div className="outerInput">
                                        <TextField id="dueDate" type='date' name="dueDate" label="Due Date" required variant="outlined" className="customerInput"
                                            autoComplete="off" value={leadData.dueDate} onChange={handleChangeLead} /><br />
                                    </div>
                                    <div className="outerInput">
                                        <TextField id="monthlyRevenue" type='number' name="monthlyRevenue" default="0" label="Monthly Revenue" variant="outlined" className="customerInput"
                                            autoComplete="off" value={leadData.monthlyRevenue} onChange={handleChangeLead} /><br />
                                    </div>
                                    <div className="outerInput">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel>Assigned To*</InputLabel>
                                                <Select
                                                    id="agginedTO"
                                                    name="agginedTO"
                                                    value={leadData.agginedTO}
                                                    label="Assigned To"
                                                    onChange={handleChangeLead}
                                                    className="selectCo"
                                                    required
                                                >
                                                    {
                                                        assignedToNameList.map((assignTo) => (
                                                            <MenuItem value={assignTo.value} key={assignTo.id}>{assignTo.value}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                            <input style={{ display: "none" }} id="cnlBTN" type="reset" value="Reset Form" />
                            <button style={{ display: "none" }} id="ubmit" type='submit'></button>
                        </form>
                    </div>

                </div>
                {/* <Showleads /> */}
            </div>

        </>
    )
}
export default Showleas;