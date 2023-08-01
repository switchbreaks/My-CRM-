import React from "react";
import './addcustomer.css';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { industryVertical, sirName } from '../menuData.jsx'
import { RiSave3Fill } from 'react-icons/ri';
import { MdOutlineClear } from 'react-icons/md'
import { BiShow, BiHide } from 'react-icons/bi'
import { AiOutlineRollback } from 'react-icons/ai'
import Select from '@mui/material/Select';
import swal from 'sweetalert';
import { useEffect } from "react";
import { GrHomeRounded } from 'react-icons/gr';
import { leadSourceNamelisi } from '../menuData';
import { useNavigate } from "react-router-dom";
const Customer = () => {
    const [showInput, setShowInput] = useState(false);
    const [status, setstatus] = useState(false)
    const [customerData, setcustomerData] = useState({
        value: "",
        fname: "",
        lname: "",
        code: "",
        contact: " ",
        dob: "",
        customerDesi: "",
        customerEmail: "",
        customerPhone: "",
        companyName: "",
        industryVertical: "",
        country: "",
        postalCode: "",
        state: "",
        city: "",
        customerWebsite: "",
        twitter: "",
        status: "New",
        priority: "Highest",
        skyp: "",
        linkdin: "",
        monthlyRevenue: "0",
        projectTitle: "-",
        projectDescr: "-",
        dueDate: "Unassigned",
        customername: "-",
        best_TimTo_Contact: "..",
        best_TimTo_Contact2: "..",
        agginedTO: "Unassigned",
        resion: "",
        taskCloseDate: "",
    });
    const [chooscountry, setchooscountry] = useState([]);
    const navogate = useNavigate();
    const gotoMainleadPage = () => {
        navogate("/sale/lead");
    }
    const gobackPage = () => {
        navogate(-1);
    }
    useEffect(() => {
        // fetching api of contact form from local db.json file
        // and dispaly the name of company in company name comming from the line no 77
        fetch('http://localhost:3000/countries').then((res) =>
            res.json()
        ).then((response) =>
            setchooscountry(response)
        );
    }, []);
    document.title = `Customer Page`
    const shuw = () => {
        setShowInput(!showInput)
        setstatus(!status)
    }
    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setcustomerData({ ...customerData, [name]: value });
    }
    const sendCistomerData = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/customerData", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customerData),
        }).then(()=> {
            gotoMainleadPage();
            swal("Lead Created", "", "success")
        }).catch(()=> {

        })
    }

    return (
        <>
            <div className="customer_main_div">
                <div className="customer_sub_div">
                    <form onSubmit={sendCistomerData}>
                        <div className="h1andBtn bg-white">
                            <div className="gobackAndh4Div  d-flex">
                                <AiOutlineRollback className="custo_gobk_arr text-dark" onClick={gobackPage} />
                                <GrHomeRounded className="custo_gobk_arr" onClick={gotoMainleadPage} />
                                <h4 className="h4class btn bg-light text-dark m-2">Create Customer</h4>
                            </div>
                            <div className="bothBTN">
                                <label className="btnTop btn btn-secondary m-2" htmlFor="cnlBTN">Clear <MdOutlineClear /></label>
                                <label className="btnTop btn btn-primary m-2 text-white" htmlFor="ubmit">Save <RiSave3Fill /></label>
                            </div>
                        </div>
                        <div className="customerFormDiv">
                            <div className="input_field">
                                <div className="outerInput">
                                    <div className="mobAndcode">
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel>Mr</InputLabel>
                                                <Select
                                                    id="value"
                                                    value={customerData.value}
                                                    name="value"
                                                    label="Mr"
                                                    onChange={handleChange}
                                                    className="countryCode  sirnameSelector"
                                                    required
                                                >
                                                    {
                                                        sirName.map((nameTitle) => (
                                                            <MenuItem value={nameTitle.value} key={nameTitle.id}>{nameTitle.value}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <TextField id="fname" type='text' name="fname" label="First Name" variant="outlined" className="customerInput selectorSide"
                                            autoComplete="off" required value={customerData.fname} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="outerInput">
                                    <TextField id="lname" type='text' label='Last Name' name="lname" variant="outlined" className="customerInput"
                                        autoComplete="off" value={customerData.lname} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <div className="mobAndcode">
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel>ISD</InputLabel>
                                                <Select
                                                    id="code"
                                                    value={customerData.code}
                                                    name="code"
                                                    label="Code"
                                                    onChange={handleChange}
                                                    className="countryCode"
                                                    required
                                                >
                                                    {
                                                        chooscountry.map((countryName) => (
                                                            <MenuItem value={countryName.code} key={countryName.code}>{countryName.code}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <TextField id="contact" type='number' name="contact" label="Primary Contact" variant="outlined"
                                            className="customerInput smallOne" required value={customerData.contact} onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="outerInput">
                                    <div className="mobAndcode">
                                        <Box>
                                            <FormControl fullWidth>
                                                <InputLabel>ISD</InputLabel>
                                                <Select
                                                    id="code"
                                                    value={customerData.code}
                                                    name="code"
                                                    label="Code"
                                                    onChange={handleChange}
                                                    className="countryCode"
                                                    required
                                                >
                                                    {
                                                        chooscountry.map((countryName) => (
                                                            <MenuItem value={countryName.code} key={countryName.code}>{countryName.code}</MenuItem>
                                                        ))
                                                    }
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <TextField id="customerPhone" type='number' name="customerPhone" label="Alternate Number" variant="outlined"
                                            className="customerInput smallOne" required value={customerData.customerPhone} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="outerInput">
                                    <TextField id="customerEmail" type='email' name="customerEmail" label="Customer Email" variant="outlined"
                                        className="customerInput" autoComplete="off" required value={customerData.customerEmail} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <TextField id="dob" type='date' name="dob" label="DOB" required variant="outlined" className="customerInput"
                                        autoComplete="off" value={customerData.dob} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <TextField id="customerDesi" type='text' name="customerDesi" label="Designation" variant="outlined"
                                        className="customerInput" autoComplete="off" required value={customerData.customerDesi} onChange={handleChange} />
                                </div>

                                {/* this line of code  display the the country code in form page */}
                                <div className="outerInput">
                                    <Box sx={{ minWidth: 110 }}>
                                        <FormControl fullWidth>
                                            <InputLabel>Industry Vertical</InputLabel>
                                            <Select
                                                id="industryVertical"
                                                name="industryVertical"
                                                value={customerData.industryVertical}
                                                label="Industry Vertical"
                                                onChange={handleChange}
                                                className="selectCo"
                                                required
                                            >
                                                {/*  this line of code help to take all MenuItem Detail from the json files
                                                         there be can not use map method to get the all MenuItem data */}

                                                {
                                                    industryVertical.map((hhh) => (
                                                        <MenuItem value={hhh.value} key={hhh.id}>{hhh.value}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="outerInput">
                                    <TextField id="companyName" type='text' name="companyName" label="Company Name" variant="outlined"
                                        className="customerInput" autoComplete="off" value={customerData.companyName} required onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <TextField id="city" type='text' name="city" label="City" variant="outlined" className="customerInput"
                                        autoComplete="off" value={customerData.city} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <TextField id="state" type='text' name="state" label="State" variant="outlined" className="customerInput"
                                        autoComplete="off" value={customerData.state} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <TextField id="postalCode" type='number' name="postalCode" label="Postal Code" variant="outlined"
                                        className="customerInput" autoComplete="off" value={customerData.postalCode}
                                        onChange={handleChange} InputProps={{ inputProps: { min: "111111", max: "999999", step: "1" } }} />
                                </div>
                                <div className="outerInput">
                                    <Box sx={{ minWidth: 110 }}>
                                        <FormControl fullWidth>
                                            <InputLabel>Country</InputLabel>
                                            <Select
                                                id="country"
                                                name="country"
                                                value={customerData.country}
                                                label="Industry Vertical"
                                                onChange={handleChange}
                                                className="selectCo"
                                                required
                                            >
                                                {/*  this line of code help to take all MenuItem Detail from the json files
                                                         there be can not use map method to get the all MenuItem data */}

                                                {
                                                    chooscountry.map((countryName) => (
                                                        <MenuItem value={countryName.name} key={countryName.name}>{countryName.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="outerInput">
                                    <TextField id="streetadd" type='text' name="streetadd" label="Street Address" variant="outlined"
                                        className="customerInput" autoComplete="off" value={customerData.streestreetadd} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <TextField id="customerWebsite" type='url' name="customerWebsite" label="Website" variant="outlined"
                                        className="customerInput" autoComplete="off" value={customerData.customerWebsite} onChange={handleChange} />
                                </div>
                                <div className="outerInput">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel>Lead Source*</InputLabel>
                                            <Select
                                                id="leadSource"
                                                name="leadSource"
                                                value={customerData.leadSource}
                                                label="Lead Source*"
                                                onChange={handleChange}
                                                className="selectCo" required
                                            >
                                                {
                                                    leadSourceNamelisi.map((leadNale) => (
                                                        <MenuItem value={leadNale.value}>{leadNale.value}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="outerInput">
                                    <label htmlFor='shows'>
                                        <p className='btnTop btn btn-primary'>
                                            {status ? <> Hide Details <BiShow /></> : <> Add Details <BiHide /></>}
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {showInput ?
                            <>
                                <div className="customerFormDiv">
                                    <div className="input_field mba">
                                        <div className="outerInput">
                                            <TextField id="twitter" type='text' name="twitter" label="twitter" variant="outlined"
                                                className="customerInput" autoComplete="off" value={customerData.twitter} onChange={handleChange} />
                                        </div>
                                        <div className="outerInput">
                                            <TextField id="skyp" type='url' name="skyp" label="Skype" variant="outlined" className="customerInput"
                                                autoComplete="off" value={customerData.skyp} onChange={handleChange} />
                                        </div>
                                        <div className="outerInput">
                                            <TextField id="linkdin" type='url' name="linkdin" label="Linkedin" variant="outlined"
                                                className="customerInput" autoComplete="off" value={customerData.linkdin} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </>
                            : null}
                        <input style={{ display: "none" }} id="cnlBTN" type="reset" value="Reset Form" />
                        <button style={{ display: "none" }} id="ubmit" type='submit'></button>
                    </form>
                    <button style={{ display: "none" }} id="shows" onClick={shuw} >Add Detail</button>
                </div>
            </div>


        </>
    );
}
export default Customer;
