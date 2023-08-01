//  useralldataDiv width is 100% and this classaccessed in every component  
import React from "react";
import Showcustomer from "../Sale/Showcustomer";
import Lead from "../Sale/Lead.jsx";
import './master.css'
import Showmaster from "./Showmaster";
const Master = () => {
    return (
        <>
            <div className="useralldataDiv">
                <div className="master">
                    <div className="showAllData">
                        <Showcustomer />
                    </div>
                    <div className="showAllData">
                        <Showmaster />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Master;