import React from "react";
import './account.css'
import TextField from '@mui/material/TextField';
import { useState } from "react";
import swal from 'sweetalert';
const Account = () => {
    const [cnfpasswd, setcnfpasswd] = useState(true)
    const [accountData, setaccountData] = useState({
        fname: "",
        mname: "",
        lname: "",
        dob: "",
        contactNumber: "",
        email: "",
        passwordAc: "",
        cnfpassword: "",
    });
    let name, value;
    const handleChangeAccount = (e) => {
        name = e.target.name;
        value = e.target.value;
        setaccountData({ ...accountData, [name]: value })
        console.log(name.passwordAc);
    }
    const accountSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(accountData)
            await fetch("http://localhost:3000/add-Admin-AccountData", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(accountData)
            }).then(() => {
                swal("Account ", "Added", "success")
            }).catch(() => {
                console.log("Not submited");
            })
        } catch {
            console.log("Try block not Working");
        }

    }
    return (
        <>

            <div className="accountMain">

                <form onSubmit={accountSubmit}>
                    <h3 className="accountH3">Create New User</h3>
                    <div className="formDiv">
                        <div className="outerInput">
                            <TextField id="fname" type='text' name="fname" label="First Name" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.fname} required onChange={handleChangeAccount} /><br />
                        </div>
                        <div className="outerInput">
                            <TextField id="mname" type='text' name="mname" label="Middle Name" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.mname} onChange={handleChangeAccount} /><br />
                        </div>
                        <div className="outerInput">
                            <TextField id="lname" type='text' name="lname" label="Last Name" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.lname} required onChange={handleChangeAccount} /><br />
                        </div>
                        <div className="outerInput">

                            <TextField id="dob" type='date' label="DOB" name="dob" title="DOB" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.dob} required onChange={handleChangeAccount} /><br />
                        </div>

                        <div className="outerInput">
                            <TextField id="contactNumber" type='text' name="contactNumber" label="Contact Number" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.contactNumber} onChange={handleChangeAccount} /><br />
                        </div>
                        <div className="outerInput">
                            <TextField id="email" type='text' name="email" label="Email ID" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.email} onChange={handleChangeAccount} /><br />
                        </div>
                        {/* <div className="outerInput">
                            <TextField id="username" type='text' name="username" label="User Name" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.username} required onChange={handleChangeAccount} /><br />
                        </div> */}
                        <div className="outerInput">
                            <TextField id="passwordAc" type='password' name="passwordAc" label="Password" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.passwordAccount} required onChange={handleChangeAccount} /><br />
                        </div>
                        <div className="outerInput">
                            <TextField id="cnfpassword" type='password' name="cnfpassword" label="Conform Password" variant="outlined" className="customerInput"
                                autoComplete="off" value={accountData.cnfpassword} required onChange={handleChangeAccount} /><br />
                            {cnfpasswd && <p className="wrongAcpasswd">password must be same</p>}
                        </div>
                    </div>
                    <button type='submit' className="btnSubmitAcc">Submit</button>
                </form>
            </div>


        </>
    )
}
export default Account;