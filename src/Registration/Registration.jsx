// this is the user registration page 
//  useralldataDiv width is 100% and this classaccessed in every component 
import React, { useState } from "react";
import './registration.css'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
const Registration = () => {
    const navogate = useNavigate();
    const [regdata, setregdata] = useState({
        fname: "",
        lname: "",
        emails: "",
        username: "",
        passwords: "",
        Cnfpassword: "",
    })
    const gotoLogin = () => {
        navogate("/login")
    }
    let name, value;
    const regdataOnchange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setregdata({ ...regdata, [name]: value })
    }
    const submitregdata = async (e) => {
        e.preventDefault()
        try {
            await fetch("http://localhost:3000/registration-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(regdata),
            }).then(() => {
                swal("Registration", "Success", "success");
            }).then(() => {
                gotoLogin();
            }).catch(() => {
                console.log("POST NOT WORKING")
            });
        } catch (e) {
            console.log("try block is not working")
        }
    }
    return (
        <>
            <div className="useralldataDiv">
                <div className="loging registration">
                    <div className="login2">
                        <form className="formLogin" onSubmit={submitregdata}>
                            <h1 className="mb-4">Registration</h1>
                            <div className="flexName">
                                <TextField id="fname" type='text' name="fname" label="First Name" variant="outlined"
                                    autoComplete="off" className="inputLogin small2" onChange={regdataOnchange} value={regdata.fname} required />
                                <TextField id="lname" type='text' name="lname" label="Last Name" variant="outlined"
                                    autoComplete="off" className="inputLogin small2" onChange={regdataOnchange} value={regdata.lname} required />
                            </div>
                            <TextField id="emails" type='email' name="emails" label="Email ID" variant="outlined"
                                autoComplete="off" className="inputLogin small1" onChange={regdataOnchange} value={regdata.emails} required />
                            <TextField id="passwords" type='password' name="passwords" label="Password" variant="outlined"
                                autoComplete="off" className="small1" onChange={regdataOnchange} value={regdata.passwords} required />
                            <TextField id="Cnfpassword" type='password' name="Cnfpassword" label="Confirm Password" variant="outlined"
                                autoComplete="off" className="small1" onChange={regdataOnchange} value={regdata.Cnfpassword} required />
                            <div className="flexName mobile">
                                <button type="reset" className="regbtn btn btn-secondary ms-1">Clear</button>
                                <button className="regbtn btn btn-primary" type="submit">Submit</button>
                            </div>
                            <p className="m-2">already have an account <Link to="/login"><span span className="gotoBtn fw-bolder">Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Registration;