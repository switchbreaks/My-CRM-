//*************         This is home in this page show data related the assigned and due date   ***************** */
//   .userAllData css ia aval in {(useralldata.css)} and use in this page in line no 21
//   .userDetail css ia aval in {(useralldata.css)} and use in this page in line no 22
//   .userInfo   css ia aval in {(useralldata.css)} and use in this page in line no 23
//   .ShowcustomerHover css ia aval in {(sholead.css)} and use in this page in line no 39
import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from 'react-router-dom'
// import { DataGrid } from '@mui/x-data-grid';

const Home = () => {
    let date = new Date().toJSON().slice(0, 10);
    const soTodat = new Date().toLocaleDateString();
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetching api of contact form from local db.json file
        fetch('http://localhost:3000/customerData').then((res) => res.json()).then((response) => setData(response));
    }, [data]);

    return (
        <>
            <div className="useralldataDiv">
                <div className="h1andBtn d-flex">
                    <div className="gobackAndh4Div  d-flex">
                        <h1 className="h4class welcome m-3 ">Welcome</h1>
                        <h2 className="h4class  btn bg-light text-dark m-2">Adarsh Mishra</h2>
                    </div>
                    <div className="bothBTN mt-2">
                        <span className="text-success">Last Login</span> &nbsp;&nbsp;
                        <div>ToDay</div>
                    </div>
                </div>
                <div className='userAllData'>
                    <div className='mt-1 '>
                        <h3 className='userInfo fs-4 bg-primary text-white m-0'>
                            <select className="selecthomeTask m-1 p-2">
                                <option className="optionTask" >My ToDay Tasks</option>
                                <option className="optionTask">My Open Tasks</option>
                                <option className="optionTask">My Tasks</option>
                                <option className="optionTask">My Old Tasks</option>
                                <option className="optionTask">My Overdue Tasks</option>

                            </select>
                        </h3>
                        <table className="table smallFont">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="bg-light text-dark">Sr.</th>

                                    <th scope="col" className="bg-light text-dark">Name</th>
                                    <th scope="col" className="bg-light text-dark">Subject</th>
                                    <th scope="col" className="bg-light text-dark ">Status</th>
                                    <th scope="col" className="bg-light text-dark">Priority</th>
                                    <th scope="col" className="bg-light text-dark">Due Date</th>

                                    <th scope="col" className="bg-light text-dark text-center">Contact Time </th>
                                    <th scope="col" className="bg-light text-dark text-center">Last Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((tddata, index) => {
                                        const { id, dueDate, value, fname, lname,
                                            priority, status, resion, best_TimTo_Contact, best_TimTo_Contact2, projectTitle, lastUpdateTime, lastUpdateDate } = tddata;
                                        {/* this line of code change the bg-color based on the date */ }
                                        let dateBg;
                                        if (dueDate < date) dateBg = "bg-danger tdbgColor smallWidth";
                                        else if (dueDate === date) dateBg = "bg-warning tdbgColor smallWidth";
                                        else if (dueDate > date) dateBg = "bg-primary tdbgColor smallWidth";

                                        {/*   ********** end of the code ****** */ }

                                        return (
                                            <>
                                                <tr key={index}>
                                                    <th>
                                                        {index + 1}
                                                    </th>

                                                    {/* after click this button you redirect to the  showassignstatus page which 
                                                        display the all detail of particular element which you have clicked */}
                                                    <td className="smallName">
                                                        <Link to={`/showassignstatus/${id}`}>{` ${value} ${fname} ${lname}`} </Link>
                                                    </td>
                                                    <td className="text-capitalize smallSublect">
                                                        {
                                                            projectTitle.length > 20 ?<details className="text-primary" title="Show Subject">
                                                                <span className="detailStstus">{projectTitle}</span>
                                                                <summary>Messages</summary>

                                                            </details>
                                                                : projectTitle
                                                        }
                                                        {/*  in this tag related css written in  home.css page*/}
                                                    </td>
                                                    <td className="text-capitalize">{resion ? <span className="text-danger">Closed</span> : status} </td>
                                                    <td className="smallWidth">
                                                        {priority}
                                                    </td>
                                                    <td className={dateBg}>
                                                        {dueDate}
                                                    </td>
                                                    <td className="text-center">{`${best_TimTo_Contact} - ${best_TimTo_Contact2}`}</td>
                                                    <td className="text-center">
                                                        {lastUpdateDate === soTodat ? <span style={{ color: '#0053ff' }}>{lastUpdateTime}
                                                        </span> : <span style={{ color: '#ff9c01' }}>
                                                            {lastUpdateDate}</span>}
                                                    </td>

                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;

