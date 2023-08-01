// in this page maximum css comming from the {(useralldata.css)}  componene
import { useEffect, useState } from "react";
import './showassignstatus.css';
import { useNavigate, useParams } from "react-router-dom";
import { priorityset, currentStatus } from '../menuData.jsx'
import swal from 'sweetalert';
// react icon from "react-icons"
import { AiOutlineRollback } from 'react-icons/ai'
import { GrEdit, GrHomeRounded } from 'react-icons/gr';
import { HiUpload, HiOutlineX } from 'react-icons/hi'
import { BsThreeDots } from 'react-icons/bs';
// import { BsUpload } from 'react-icons/bs';
import { MdSend } from 'react-icons/md'
import NotesCompo from "../NotesCompo";
// import miu
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FileUplode from "./FileUplode";

const Showassignstatus = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    let uuids = id;
    let dates = new Date().toLocaleDateString();
    let times = new Date().toLocaleTimeString();
    const [closeResion, setCloseResion] = useState({
        resion: "",
        taskCloseDate: dates,
    })
    const [notsfeld, setNotsfeld] = useState({
        useralldtValue: "",
        uuid: uuids,
        date: dates,
        sendTime: times,
    });
    const [updatedueDate, setUpdatedueDate] = useState({
        dueDate: "",
        lastUpdateTime: times,
        lastUpdateDate: dates,

    })
    // hook  of status and preority 
    const [promptChng, setPromptChng] = useState({
        priority: "",
        lastUpdateTime: times,
        lastUpdateDate: dates,

    });
    const [statusChng, setStatusChng] = useState({
        status: "",
        lastUpdateTime: times,
        lastUpdateDate: dates,
    })
    const [setBestTime, setSetBestTime] = useState({
        best_TimTo_Contact: "",
        best_TimTo_Contact2: "",
        lastUpdateTime: times,
        lastUpdateDate: dates,
    });
    const [subjchange, setSubjchange] = useState({
        projectTitle: "",
        lastUpdateTime: times,
        lastUpdateDate: dates,

    });
    const URLPOSTDT = 'http://localhost:3000/customerData';
    const POSTURLA = `http://localhost:3000/customerData/${id}`

    //  --------------------------------------------- this line of code write to navigate one page to other page
    const navogate = useNavigate();

    const gotoMainleadPage = () => {
        navogate("/");
    }
    const gobackPage = () => {
        navogate(-1);
    }
    //  ---------------------------------------------   chat div related code
    let names, values;
    const notsdtsubmit = (e) => {
        names = e.target.name;
        values = e.target.value;
        setNotsfeld({ ...notsfeld, [names]: values });
    }

    //  --------------------------------------------- close task related resion
    let closeName, closeValue;
    const closehandleChange = (e) => {
        e.preventDefault();
        closeName = e.target.name;
        closeValue = e.target.value;
        setCloseResion({ ...closeResion, [closeName]: closeValue });
    }
    const closetTsakResion = async (e) => {
        e.preventDefault();
        await fetch(POSTURLA, {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(closeResion),
        }).then(() => {
            swal({
                title: "Closed Successfully",
                timer: 3000
            });
        }).catch(() => {
            alert("data not Submited");
        });
    }

    //  ------------------------------------------------- update due date
    let name, value;
    const handleChange = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setUpdatedueDate({ ...updatedueDate, [name]: value });
    }
    const setNewDueDate = async (e) => {
        e.preventDefault();
        await fetch(POSTURLA, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedueDate),
        }).then(() => {
            swal({
                title: "Due Updated!",
                timer: 3000
            });
        }).catch(() => {
        });
    }

    //  -----------------------------------------------  update preority    
    let name1, value1;
    const handleChange1 = (e) => {
        name1 = e.target.name;
        value1 = e.target.value;
        setPromptChng({ ...promptChng, [name1]: value1 });
    };
    const updatePriorty = async (e) => {
        e.preventDefault();
        await fetch(POSTURLA, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(promptChng),

        }).then(() => {
            swal({
                title: "Priority Updated",
                timer: 3000
            });
        }).catch(() => {
            alert("not updatated")
        });

    }
    // ---------------------------------------------  update status
    let name2, value2;
    const handleChange2 = (e) => {
        name2 = e.target.name;
        value2 = e.target.value;
        setStatusChng({ ...statusChng, [name2]: value2 });
    };
    const updateStatus = async (e) => {
        e.preventDefault();
        await fetch(POSTURLA, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(statusChng),
        }).then(() => {
            swal({
                title: "Status Updated",
                timer: 3000
            });
        }
        ).catch(() => alert("not Found"));
    }

    //  --------------------------------------------- update Best Time to contect
    let name3, value3
    const handleChange3 = (e) => {
        e.preventDefault();
        name3 = e.target.name;
        value3 = e.target.value;
        setSetBestTime({ ...setBestTime, [name3]: value3 });
    }
    const sutTitoCon = async (e) => {
        e.preventDefault();
        await fetch(POSTURLA, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(setBestTime),
        }).then(() => {
            swal({
                title: "Contect Time Updated!",
                timer: 3000
            });
        })
            .catch(() => alert("Unable To Uplode"));
    }

    // --------------------------------------------  update the Status 
    let name4, value4;
    const subjecthandleChange = (e) => {
        name4 = e.target.name;
        value4 = e.target.value;
        setSubjchange({ ...subjchange, [name4]: value4 });

    }
    const submitSubject = async (e) => {
        e.preventDefault();
        await fetch(POSTURLA, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subjchange),
        }).then(() => {
            swal({
                title: "Subject Updated!",
                timer: 3000
            });
        });
    }

    // --------------------------------------------------------  send Nots Data into json file based on the perticuler user data
    const submitNots = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/notesData/?${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notsfeld),
        }).then(() => {
            alert("Data Submitted");
        }).catch(() => {
            alert("Data not submited properly");
        });
    }

    useEffect(() => {
        fetch(`${URLPOSTDT}?id=${id}`).then((res) => res.json()).then((respo) => setData(respo));
    }, [statusChng,updatedueDate]);

    return (
        <>
            {
                data.map((clickedData, index) => {
                    const { id, value,fname,lname,projectTitle, dueDate,
                        status, priority, industryVertical, best_TimTo_Contact, best_TimTo_Contact2, resion, taskCloseDate } = clickedData;
                    return (
                        <>
                            <div className='useralldataDiv' key={index}>
                                <div className='topDivUseraldata'>
                                    <div className="h1andBtn d-flex bg-white">
                                        <div className="gobackAndh4Div  d-flex">
                                            <AiOutlineRollback className="custo_gobk_arr text-dark" onClick={gobackPage} />
                                            <GrHomeRounded className="custo_gobk_arr" onClick={gotoMainleadPage} />
                                            <h1 className="h4class btn bg-light text-dark m-2 text-capitalize">{`${value} ${fname} ${lname}`}</h1>
                                        </div>
                                        <div className="bothBTN mt-2">
                                            {resion ? <label className='btnTop m-1 btn btn-danger' htmlFor="updateBTN">Closed</label>
                                                : <label className='btnTop m-1 btn btn-success' htmlFor="updateBTN">Going On</label>
                                            }
                                            <label><button className='btnTop m-1 btn btn-secondary'><BsThreeDots /></button></label>
                                        </div>
                                    </div>
                                    <div className='userDtlDiv leadinfo'>
                                        {/* here i am display the the data related to infromation section */}
                                        <div className='userDetail pb-4'>

                                            <h2 className='userInfo fs-5 bg-primary text-white'>Information</h2>
                                            <div className="infoMDiv">
                                                <tr className="trClass">
                                                    <td className="tdClass text-primary">Related To</td>
                                                    <td className="tdClass">{industryVertical}</td>
                                                    <td className="tdClass"><button className="closeTskBtn" title="Close This Task" onClick={() => setOpen(true)}>Close Task</button></td>
                                                    <dialog open={open} className="centedDiLog">
                                                        <b className="">Closing Resion</b>
                                                        <form method="dialog" onSubmit={closetTsakResion}>
                                                            <TextField id="resion" type='text' name="resion" label="Resion" className="mt-2"
                                                                autoComplete="off" value={closeResion.resion} onChange={closehandleChange} required /><br />
                                                            <div>
                                                                <button className="btn btn-success updAndCloseBtn"><HiUpload title="Update" /></button>
                                                                <div className="btn btn-secondary updAndCloseBtn" onClick={() => setOpen(false)}><HiOutlineX title="Cancel" /></div>
                                                            </div>
                                                        </form>
                                                    </dialog>
                                                </tr>
                                                <tr className="trClass">
                                                    <td className="tdClass text-primary">Due Date</td>
                                                    <td className="tdClass">{dueDate}</td>
                                                    <td className="tdClass"><button className="infoeditBtn" onClick={() => setOpen1(true)} ><GrEdit className="" /></button></td>
                                                    <dialog open={open1} className="centedDiLog" >
                                                        <b>Set Duedate</b>
                                                        <form method="dialog" onSubmit={setNewDueDate}>
                                                            <TextField id="dueDate" type='date' name="dueDate" className="mt-2 rounded"
                                                                autoComplete="off" sx={{ width: 200 }} value={updatedueDate.dueDate} onChange={handleChange} /><br />
                                                            <div>
                                                                <button className="btn btn-success updAndCloseBtn"><HiUpload title="Update" /></button>
                                                                <div className="btn btn-secondary updAndCloseBtn" onClick={() => setOpen1(false)}><HiOutlineX title="Cancel" /></div>
                                                            </div>
                                                        </form>
                                                    </dialog>
                                                </tr>
                                                <tr className="trClass">
                                                    <td className="tdClass text-primary">Priority</td>
                                                    <td className="tdClass">{priority}</td>
                                                    <td className="tdClass"><button className="infoeditBtn" onClick={() => setOpen2(true)}><GrEdit className="" /></button></td>
                                                    <dialog open={open2} className="centedDiLog">
                                                        <b className="">Change Priority</b>
                                                        <form method="dialog" onSubmit={updatePriorty}>
                                                            <Box sx={{ minWidth: 130 }} >
                                                                <FormControl variant="filled" sx={{ minWidth: 200 }}>
                                                                    <InputLabel id="demo-simple-select-filled-label">Priority</InputLabel>
                                                                    <Select
                                                                        id="priority"
                                                                        name="priority"
                                                                        value={promptChng.priority}
                                                                        onChange={handleChange1}
                                                                        defaultValue={status}
                                                                        className="mt-1 p-0"
                                                                        required
                                                                    >
                                                                        {
                                                                            priorityset.map((sirNm) => (
                                                                                <MenuItem value={sirNm.priority}>{sirNm.priority}</MenuItem>
                                                                            ))
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                            <div>
                                                                <button className="btn btn-success updAndCloseBtn"><HiUpload title="Update" /></button>
                                                                <div className="btn btn-secondary updAndCloseBtn" onClick={() => setOpen2(false)}><HiOutlineX title="Cancel" /></div>
                                                            </div>
                                                        </form>
                                                    </dialog>
                                                </tr>
                                                <tr>
                                                    <td className="tdClass text-primary">Status</td>
                                                    <td>{status} </td>
                                                    <td className="tdClass"><button className="infoeditBtn" onClick={() => setOpen3(true)}><GrEdit /></button></td>
                                                    <dialog open={open3} className="centedDiLog">
                                                        <b className="">Change Status</b>
                                                        <form method="dialog" onSubmit={updateStatus}>
                                                            <Box sx={{ minWidth: 130 }}>
                                                                <FormControl variant="filled" sx={{ minWidth: 200 }}>
                                                                    <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                                                                    <Select
                                                                        name="status"
                                                                        value={statusChng.status}
                                                                        label="Age"
                                                                        onChange={handleChange2}
                                                                        className="mt-1 p-0"
                                                                        required
                                                                    >
                                                                        {
                                                                            currentStatus.map((sirNm) => (
                                                                                <MenuItem value={sirNm.currStatus}>{sirNm.currStatus}</MenuItem>
                                                                            ))
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                            <div>
                                                                <button className="btn btn-success updAndCloseBtn" type="submit"><HiUpload title="Update" /></button>
                                                                <div className="btn btn-secondary updAndCloseBtn" onClick={() => setOpen3(false)}><HiOutlineX title="Cancel" /></div>
                                                            </div>
                                                        </form>
                                                    </dialog>
                                                    <td className="text-danger text-capitalize">{resion} &ensp; {taskCloseDate}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdClass text-primary">Contact Time</td>
                                                    <td>{best_TimTo_Contact}-{best_TimTo_Contact2}</td>
                                                    <td className="tdClass"><button className="infoeditBtn" onClick={() => setOpen4(true)}><GrEdit className="" /></button></td>
                                                    <dialog open={open4} className="centedDiLog">
                                                        <b className="">Best Time To Contact</b>
                                                        <form method="dialog" onSubmit={sutTitoCon}>
                                                            <div className="mt-2">
                                                                <label>From </label><br />
                                                                <TextField id="best_TimTo_Contact" type='time' name="best_TimTo_Contact" variant="outlined"
                                                                    autoComplete="off" sx={{ width: 200 }} required className="rounded"
                                                                    value={setBestTime.best_TimTo_Contact} onChange={handleChange3} /><br />
                                                            </div>
                                                            <div className="">
                                                                <label>To </label><br />
                                                                <TextField id="best_TimTo_Contact2" type='time' name="best_TimTo_Contact2" variant="outlined"
                                                                    autoComplete="off" sx={{ width: 200 }} required className="rounded"
                                                                    value={setBestTime.best_TimTo_Contact2} onChange={handleChange3} /><br />
                                                            </div>
                                                            <button className="btn btn-success updAndCloseBtn"><HiUpload title="Update" /></button>
                                                            <div className="btn btn-secondary updAndCloseBtn" onClick={() => setOpen4(false)}><HiOutlineX title="Cancel" /></div>
                                                        </form>
                                                    </dialog>
                                                </tr>
                                                <tr className="trClass">
                                                    <td className="tdClass text-primary">Subject</td>
                                                    <td className="tdClass subjWidth">
                                                    {projectTitle.length > 20 ? <details className="text-primary">
                                                        <span className="detailStstus">{projectTitle}</span>
                                                       <summary>Messages</summary>
                                                        </details> : 
                                                        projectTitle}
                                                        {/*  in this tag related css written in  home.css page*/}
                                                    </td>
                                                    <td className="tdClass"><button className="infoeditBtn" title="UpDate Subject" onClick={() => setOpen5(true)}><GrEdit /></button></td>
                                                    <dialog open={open5} className="centedDiLog">
                                                        <b className="">Update Subject</b>
                                                        <form method="dialog" onSubmit={submitSubject}>
                                                            <TextField id="projectTitle" type='text' name="projectTitle" label="Subject" className="mt-2"
                                                                autoComplete="off" value={subjchange.projectTitle} onChange={subjecthandleChange} required /><br />
                                                            <div>
                                                                <button className="btn btn-success updAndCloseBtn"><HiUpload title="Update" /></button>
                                                                <div className="btn btn-secondary updAndCloseBtn" onClick={() => setOpen5(false)}><HiOutlineX title="Cancel" /></div>
                                                            </div>
                                                        </form>
                                                    </dialog>
                                                </tr>

                                            </div>
                                        </div>
                                        {/* ***********************************end of infromation ***************************** */}
                                        {/* now i am going to store note add nots data in customerData page */}
                                        <div className='useralldtNotes'>
                                            <div className='userDetail '>
                                                <h3 className='userInfo fs-5 bg-primary text-white'>Notes</h3>
                                                <form onSubmit={submitNots}>
                                                    <NotesCompo id={id} />
                                                    <div className="notsMainDiv">
                                                        <textarea className='useralldtNots' style={{ width: "100%", height: '80px' }} name="useralldtValue" id='useralldtValue'
                                                            value={notsfeld.useralldtNots} onChange={notsdtsubmit} />
                                                        <button type="submit" className="sendBtn_Note ms-3 text-success"><MdSend /></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* *************************** end Notes ************************** */}
                                        {/* this is code to uplode the  or Attachments component section */}

                                    </div>
                                    {/* *******************   End  Attachments component section   ******************* */}
                                    <div className="attachFile">
                                        <FileUplode />
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
export default Showassignstatus;