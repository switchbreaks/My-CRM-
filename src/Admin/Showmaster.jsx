import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Showmaster = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetching api of contact form from local db.json file
        fetch('http://localhost:3000/add-Admin-AccountData').then((res) => res.json()).then((response) => setData(response));
    },[0]);
    const aaa=()=>{
        alert("this is New Users")
    }

    return (
        <div className="cup">
            <h5 className="text-white mt-5 mb-0 p-3 ps-1 bg-primary">New Users</h5>

            <table className="table p-10">
                <thead className="thead-dark">
                    <tr>
                        <th scope="row" className="bg-light text-dark">Id</th>
                        <th scope="col" className="bg-light text-dark">Name</th>
                        <th scope="col" className="bg-light text-dark">DOB</th>
                        <th scope="col" className="bg-light text-dark">Contact Number</th>
                        <th scope="col" className="bg-light text-dark">Email</th>
                        <th scope="col" className="bg-light text-dark">Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length && data.map((tbdata) => {
                            return (
                                <>
                                    <tr className="ShowcustomerHover">
                                    <th scope="row" className=" text-dark">{tbdata.id}</th>
                                        <td className="cursor-pointer"><Link to="" className="border-0 text-primary" onClick={aaa}>
                                            { `${tbdata.fname} ${tbdata.mname} ${tbdata.lname}` }</Link>
                                        </td>
                                        <td >{tbdata.dob}</td>
                                        <td>{tbdata.contactNumber}</td>
                                        <td>{tbdata.email}</td>
                                        <td>{tbdata.username}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>

            </table>

            <div>

            </div>
        </div>
        
                    
    );
}
export default Showmaster;