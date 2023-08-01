import React from "react";
//-------------------------------------------------   this page of css code written in {(showassignstatus.css)}
const FileUplode = () => {
    return (
        <>
            <div className='userDetail'>
                <h3 className='userInfo fs-5 bg-primary text-white'>Attachments</h3>
                <form>
                    <div className='d-flex m-3'>
                        <input type="file" />
                        <button className="sendEmlbtn btn btn-primary">Uplode</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FileUplode;