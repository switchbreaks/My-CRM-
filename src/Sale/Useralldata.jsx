//   .===className   and    #===id
//   {id} is comming from Showcustomer.jsx component this is the useParams hook and in this page line 16,23
//   .btnTop css define in ...........css file and in this page line 44,45,45
//   .h1andBtn  css define in ..........css file and used in this page line no 38
//   .gobackAndh4Div css define in ...........css file and use in this page in line 39
//   .custo_gobk_arr css define in ...........css file and  use in this page in line 41
//   .h4class    css define in ...........css file  and used in this page line no 42
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import { MdEdit, MdSend } from 'react-icons/md';
import { AiOutlineRollback } from 'react-icons/ai'
import './useralldata.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotesCompo from '../NotesCompo';
import FileUplode from '../Home/FileUplode';
const Useralldata = () => {
    const { id } = useParams();
    let dates = new Date().toLocaleDateString();
    let times =new Date().toLocaleTimeString();
    let uuids = id;
    const [data, setData] = useState([]);
    const navogate = useNavigate();
    const URLCUS = 'http://localhost:3000/customerData';
    const [userNots, setuserNots] = useState({
        useralldtValue: '',
        uuid: uuids,
        date:dates,
        sendTime:times
    });
   
    const gotoMainleadPage = () => {
        navogate("/");
    }
    const gobackPage = () => {
        navogate(-1);
    }
    useEffect(() => {
        fetch(`${URLCUS}?id=${id}`).then((res) => res.json()).then((response) => setData(response));
    }, [id]);
    /////////  now writing the code to send Notes data in JSON file which also contain the data of the company name customer name and mobile number;
    let name, value;
    const notsdtsubmit = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserNots({ ...userNots, [name]: value });
        
    }
    /// submit Notes data function function
    const submitNots = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3000/notesData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userNots),
        }).then(() => {
            // alert("data Submitted");

            console.log(userNots)
        }).catch((error) => {
            console.log(error, " Data not submitted");
        });

    }
    return (
        <>
            {
                data.map((alldata, index) => {
                    const {
                    value, fname, lname, code, contact, dob, customerDesi, customerEmail, customerPhone, companyName, industryVertical,
                        country, postalCode, state, city, customerWebsite, twitter, skyp, linkdin, streetadd, leadSource, agginedTO, priority
                        , status } = alldata;
                    return (
                        <>
                            <div className='useralldataDiv'>
                                <div className='topDivUseraldata'>
                                    <div className="h1andBtn d-flex">
                                        <div className="gobackAndh4Div  d-flex">
                                            <AiOutlineRollback className="custo_gobk_arr text-dark" onClick={gobackPage} />
                                            <GrHomeRounded className="custo_gobk_arr" onClick={gotoMainleadPage} />
                                            <h1 className="h4class btn bg-light text-dark m-2" key={index}>{`${value} ${fname} ${lname}`}</h1>
                                        </div>
                                        <div className="bothBTN mt-2">
                                            {/* <button className='btnTop m-1 btn btn-primary'>Send Email</button> */}
                                            <button className='btnTop m-1 btn btn-primary'>Edit <MdEdit /></button>
                                            <button className='btnTop m-1 btn btn-secondary'><BsThreeDots /></button>
                                        </div>
                                    </div>
                                    <div className='userDtlDiv'>
                                        {/* <div className='userDetail'>
                                            <h2 className='userInfo fs-5 bg-secondary text-white'>Information</h2>
                                            <ul className=''>
                                                <li className='userdtli m-3'>Customer Name <span className="userdtspan">{`${value} ${fname} ${lname}`}</span></li>
                                                <li className='userdtli m-3'>Email<span className="userdtspan">{customerEmail} </span></li>
                                                <li className='userdtli m-3'>Primary<span className="userdtspan">{`${code}-${contact}`}</span></li>
                                                <li className='userdtli m-3'>Linkedin<span className="userdtspan">{linkdin}</span></li>

                                            </ul>
                                        </div> */}
                                        <div className='userAllData'>
                                            <div className='userDetail'>
                                                <h3 className='userInfo fs-5 bg-primary text-white'>All Information</h3>
                                                <ul className='allDtul'>
                                                    <li className='userdtli m-3'>
                                                        Name<span className="userdtspan">{`${value} ${fname} ${lname}`}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Contact<span className="userdtspan">{`${code}-${contact}`}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Alt Contact <span className="userdtspan">{`${code}-${customerPhone}`}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Email <span className="userdtspan">{customerEmail}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        DOB <span className="userdtspan">{dob}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Designation <span className="userdtspan">{customerDesi}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Industry Vertical <span className="userdtspan">{industryVertical}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Company Name <span className="userdtspan">{companyName}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        City <span className="userdtspan">{city}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        State <span className="userdtspan">{state}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Pincode <span className="userdtspan">{postalCode}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Country <span className="userdtspan">{country}</span></li>
                                                    <li className='userdtli m-3'>Street Address <span className="userdtspan">{streetadd}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Lead Source <span className="userdtspan">{leadSource}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Website <span className="userdtspan">{customerWebsite}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        twitter <span className="userdtspan">{`@ ${twitter}`}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Skype <span className="userdtspan">{skyp} </span>
                                                    </li>
                                                    <li className='userdtli m-3'>Linkedin <span className="userdtspan">{linkdin}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Assigend to<span className="userdtspan">{agginedTO} </span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Status<span className="userdtspan">{status}</span>
                                                    </li>
                                                    <li className='userdtli m-3'>
                                                        Properly <span className="userdtspan">{priority} </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* now i am going to store note add nots data in customerData page */}
                                    <div className='useralldtNotes'>
                                        <div className='userDetail'>
                                            <h3 className='userInfo fs-5 bg-primary text-white'>Notes</h3>
                                            <form onSubmit={submitNots}>
                                            <NotesCompo  id = {id}/>
                                                <div className="notsMainDiv">
                                                    <textarea className='useralldtNots m-0' style={{ width: "100%", height: '80px' }} name="useralldtValue" id='useralldtValue'
                                                        value={userNots.useralldtNots} onChange={notsdtsubmit} />                                                    
                                                    <button type="submit" className="sendBtn_Note ms-3"><MdSend className='text-success'/></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="attachFile mt-0">
                                       <FileUplode/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}
export default Useralldata;