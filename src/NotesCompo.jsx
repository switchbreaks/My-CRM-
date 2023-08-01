import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./notesComp.css"
const NotesCompo = ({id}) => {
    const URLS = `http://localhost:3000/notesData?uuid=${id}`;
    const soTodat = new Date(). toLocaleDateString();
    const [getchatdt, setGetchatdt] = useState([]);
    useEffect(() => {
        fetch(URLS).then((respns) => respns.json()).then((respnsNew) => setGetchatdt(respnsNew));
    },[]);
    return (
        <>
            <div className="chatgetData">
                <div className="subCharDiv">
                    {
                        getchatdt.map((chats) => {
                            const {useralldtValue,date,sendTime}=chats;
                            return (
                                <>
                                    <div className="scrollable">
                                        <p className="chatData_P">{useralldtValue}
                                            <span className="dateSpan">{ date===soTodat ? `Today ${sendTime}`: date} <span className="arrow"></span></span>
                                        </p>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default NotesCompo;