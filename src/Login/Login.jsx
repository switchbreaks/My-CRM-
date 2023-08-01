// this is login page of the crm 
//  useralldataDiv width is 100% and this classaccessed in every component  
import React, { useState } from "react";
import './login.css'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [error, setError] = useState(false);
    const [userid, setuserid] = useState("");
    const [password, setpassword] = useState("");
    const navogate = useNavigate();
    const gotoHomeScreen = () => {
        navogate("/");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsdata = await fetch("http://localhost:3000/registration-data")
        const arrdata = await jsdata.json();
        arrdata.map((are) => {
            const { emails, passwords, id } = are;
            if (emails === userid && passwords === password) {
                console.log(id);
                gotoHomeScreen();
            }
            else {
                setError(true);
            }
        });
    }
    return (
        <>
            <div className="useralldataDiv">
                <div className="loging">
                    <div className="login2">
                        <form className="formLogin" onSubmit={handleSubmit}>
                            <h1 className="mb-4">Login</h1>
                            {/* with the help of  @mui/material be cam create the ui like the google logoin input feauld 
                          and if you want to use the meterialui then you need to import and install @mui/material package*/}
                            <TextField id="userid" name="userid" type='text' label="User Id" variant="outlined" autoComplete="off" className="inputLogin login"
                                onChange={(e) => setuserid(e.target.value)} value={userid}
                            //  and  autoComplete="off" help to stop the auto compleate feauldes when user fill the forms
                            /><br />
                            <TextField id="password" name="userid" type='password' label="Password" variant="outlined" className="inputLogin login"
                                onChange={(e) => setpassword(e.target.value)} value={password}
                            />
                            {/* this line of code show the error if the be input the wrong userid and password in login page */}
                            {error && <p className="loginSpan">Wrong Email or Password</p>}
                            <button className="Loginbtm mt-4 btn btn-primary" type="submit">Login</button>
                            <p className="m-2">Not a member ? <Link to='/Registration'><span className="text-primary fw-bold">Sign Up</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;