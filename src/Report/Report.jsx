//  useralldataDiv width is 100% and this classaccessed in every component  
import React, { useState } from "react";
import './report.css'
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
const Report = () => {
    const [repordData, setrepordData] = useState({
        fullname: "",
        email: "",
        querydata: "",
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setrepordData({ ...repordData, [name]: value })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:3000/query-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(repordData),
            }).then(() => {
                swal("Query", "Submitted", "success");
            }).catch(() => {
                console.log("Data Not Submitted")
            })
        } catch (e) {
            console.log("try not working");
        }
    }
    return (
        <>
            <div className="useralldataDiv">
                <div className="reportcontainer">
                    <div className="nameEmail">
                        <div className="reportInput">
                            <form onSubmit={handleAdd}>
                                <h2 className="reportH1">Write Your Query</h2>
                                <div className="nameandemail">
                                    <TextField id="fullname" type='text' name="fullname" label="Full Name" variant="outlined" className="reportText gap"
                                        autoComplete="off" value={repordData.fullname} onChange={handleInputs} required /> &nbsp;&nbsp;
                                    <TextField id="email" type='email' name="email" label="Email ID" variant="outlined" className="reportText gap"
                                        autoComplete="off" onChange={handleInputs} value={repordData.email} required />
                                </div>
                                <br /><textarea id="querydata" name="querydata" onChange={handleInputs} value={repordData.querydata}
                                    placeholder="Write query ..." style={{ height: '200px' }} required autoComplete="off" className="textarea" />
                                <div className="repBtn">
                                    <button className="commBtn sub" type="submit">Submit Report</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Report;