//  .ShowcustomerHover css define in (index.css) file
import React, { useEffect, useState } from "react";
import {BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Showcustomer = () => {
    const [data, setData] = useState([]);
    const URL = 'http://localhost:3000/customerData';
    useEffect(() => {
        // fetching api of contact form from local db.json file
        fetch(URL).then((res) => res.json()).then((response) => setData(response));
    },[]);

    return (
        <div className="mt-1">
            <h5 className="text-white mb-0 p-3 ps-1 bg-primary">Show Leads</h5>
            <table className="table p-10">
                <thead className="thead-dark">
                    <tr>
                        <th scope="row" className="bg-light text-dark">Sr.</th>
                        <th scope="col" className="bg-light text-dark">Name</th>
                        <th scope="col" className="bg-light text-dark">Contact</th>
                        <th scope="col" className="bg-light text-dark">Email</th>
                        <th scope="col" className="bg-light text-dark">Company Name</th>
                        <th scope="col" className="bg-light text-dark">Industry</th>
                        <th scope="col" className="bg-light text-dark">Assigned</th>
                        <th scope="col" className="bg-light text-dark">Action</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        data.map((tbdata, i) => {
                            const {id,companyName,value,fname,lname,code,contact,customerEmail,industryVertical,agginedTO}=tbdata;
                            return (
                                <>
                                    <tr key={i} className="ShowcustomerHover">
                                        <th scope="row">
                                           {i + 1}
                                        </th>
                                        <td className="text-primary text-capitalize"><Link to={`/sale/Useralldata/${id}`}>{`${value} ${fname} ${lname}`}</Link> </td>
                                        <td >{code}-{contact}</td>
                                        <td >{customerEmail}</td>
                                        <td className="text-capitalize">{companyName}</td>
                                        <td> {industryVertical}</td>
                                        <td>{agginedTO}</td>
                                        <td className="text-center"><BsFillPencilFill className='text-success'/></td>
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
export default Showcustomer;