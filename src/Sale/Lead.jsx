//  .useralldataDiv width is 100% and this classaccessed in every component  
//  .btnTop css define in ...........css file
//  .ShowcustomerHover css define in index.css file
import React, { useEffect, useState } from "react";
import './lead.css'
import {AiOutlineRollback} from 'react-icons/ai';
import {GrHomeRounded} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
const Lead = () => {
    const URL = "http://localhost:3000/customerData"
    const [data, setData] = useState([]);
    const navogate=useNavigate();

    useEffect(() => {
        // fetching api of contact form from local db.json file
        fetch(URL).then((res) => res.json()).then((response) => setData(response));
    },[]);

// now ♥ line of code use to navigate one page to other page
    const gobackPage=()=>{
        navogate(-1);
    }
    const gotoMainleadPage=()=>{
        navogate("/");   
    }
//  now here i am going to start the filter
    let vlaue;
    const filterItms=(e)=>{
        vlaue =(e.target.value); 
    }
    return (
        <div className="useralldataDiv">
            <div className="h1andBtn d-flex">
                <div className="gobackAndh4Div  d-flex">
                    <AiOutlineRollback className="custo_gobk_arr text-dark" onClick={gobackPage} />
                    <GrHomeRounded className="custo_gobk_arr" onClick={gotoMainleadPage} />
                </div>
            </div>
            <h5 className="text-white mt-1 mb-0 p-3 ps-1 bg-primary">
                <select  className="resizingSelectTag" onChange={filterItms}>
                    <option className="filter" value="All Leads">All Leads</option>
                    <option className="filter" value="Assigned">Assigned</option>
                    <option className="filter" value="Unassigned">Unassigned</option>
                </select>
            </h5>
            <table className="table p-10">
                <thead className="thead-dark">
                    <tr>
                        
                        <th scope="row" className="bg-light text-dark ">Sr.</th>
                        <th scope="row" className="bg-light text-dark">Select</th>
                        <th scope="col" className="bg-light text-dark">Customer</th>
                        <th scope="col" className="bg-light text-dark">Company</th>
                        <th scope="col" className="bg-light text-dark">Project Title</th>
                        <th scope="col" className="bg-light text-dark">Revenue</th>
                        <th scope="col" className="bg-light text-dark ">Assigned To</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     data.map((tbdata, i) => {
                            const {companyName,value,fname,lname,projectTitle,monthlyRevenue,agginedTO}=tbdata;
                            
                            return (
                                <>
                                    <tr className="ShowcustomerHover">
                                    <th scope="row" className="text-primary">{i + 1}</th>
                                    <th className=""><input type="checkbox" /></th> 
                                        <td className="text-capitalize">
                                                {`${value} ${fname} ${lname}`}
                                        </td>
                                        <td >{companyName}</td>
                                        <td className="text-capitalize">
                                        {
                                            projectTitle.length > 20 ? <details className="text-primary" title="Show Subject">
                                                <span className="detailStstus">{projectTitle}</span>
                                                <summary>Messages</summary>

                                            </details>
                                                : projectTitle
                                        }
                                        </td>
                                        <td className="ps-4">{monthlyRevenue} &#8377;</td>
                                        <td>{agginedTO}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Lead;