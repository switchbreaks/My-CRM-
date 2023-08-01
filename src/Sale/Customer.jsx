import React from "react";
import { TbDatabaseImport } from 'react-icons/tb'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import './customer.css';
import { Link } from 'react-router-dom';
import Showcustomer from "../Sale/Showcustomer";
const Customer = () => {
    return (
        <>
            <div className='mainLeadpage'>
                <div className='createImportBTN'>
                    <div className='d-flex bgColorTo float-end'>
                        <Link to="/sale/addcustomer">
                            <button className='btnTop btn btn-primary m-2 text-white border-0'>Create New Contacts<AiOutlineAppstoreAdd /></button>
                        </Link>
                        <button className='btnTop btn btn-secondary m-2 border-0'>Import Contacts <TbDatabaseImport /></button>
                    </div>
                </div>
                <Showcustomer />
            </div>

        </>
    )
}
export default Customer;
