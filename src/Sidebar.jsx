import React from "react";
import Registration from './Registration/Registration.jsx'
import Customer from './Sale/Customer.jsx'
import Lead from './Sale/Lead.jsx'
import Useralldata from './Sale/Useralldata.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home.jsx'
import Sms from './Campaign/Sms';
import Email from './Campaign/Email';
import Whatsapp from './Campaign/Whatsapp'
import Login from "./Login/Login.jsx";
import Account from './Admin/Account.jsx';
import Master from './Admin/Master.jsx'
import Report from './Report/Report.jsx';
import { FcPhone } from "react-icons/fc";
import Addcustomer from '../src/Sale/Addcustomer.jsx'
import Showassignstatus from './Home/Showassignstatus.jsx'
// import Showleas from './Sale/Showleas.jsx'
import SidebarMenu from "./SidebarMenu.jsx";
    const Sidebar=()=>{
        return(
            <>
                <BrowserRouter>
                <div className="d-flex">
                    <SidebarMenu/>
                    <Routes>
                        <Route path="/">
                            <Route path="login" element={<Login/>}/>
                            <Route path="registration" element={<Registration/>}/>
                            <Route path="sale">
                                <Route path="customer" element={<Customer/>}/>
                                <Route path="addcustomer" element={<Addcustomer/>}/>
                                <Route path="lead" element={<Lead/>}/>
                                {/* <Route path="Showleas/:id" element={<Showleas/>}/> */}
                                <Route path="Useralldata/:id" element={<Useralldata/>}/>
                            </Route>
                            <Route index element={<Home/>}/>
                            <Route path="showassignstatus/:id" element={<Showassignstatus/>}/>
                           
                            <Route path="Admin">
                                <Route path="account" element={<Account/>}/>
                                <Route path="master" element={<Master/>}/>
                            </Route>
                            <Route path="Campaign">
                                <Route path="sms" element={<Sms/>}/>
                                <Route path="phone" element={<FcPhone/>}/>
                                <Route path="email" element={<Email/>}/>
                                <Route path="whatsapp" element={<Whatsapp/>}/>
                            </Route>
                            <Route path="report" element={<Report/>}/>
                        </Route>    
                        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
                    </Routes>
                    </div>
                </BrowserRouter>
            </>
        )
    }
    export default Sidebar;