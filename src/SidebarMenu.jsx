//  this page related to sidebar and menu  
import React from 'react';
// React icons
import { GrHomeRounded } from 'react-icons/gr'
import {SiAtlassian} from 'react-icons/si'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdAccountTree, MdOutlineEmail, MdReportProblem, MdLogout } from 'react-icons/md'
import { SiMastercomfig, SiCampaignmonitor, SiWhatsapp } from 'react-icons/si';
import { RiAdminFill } from 'react-icons/ri'
import { FcSalesPerformance, FcCustomerSupport, FcSms } from 'react-icons/fc'
// react sidebar from pro-sidebar 
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, } from 'react-pro-sidebar';
import { NavLink } from "react-router-dom";
const Sidebr = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100Vh', minHeight: '400px',background:"#bebeb6"}}>
      <Sidebar transitionDuration={1000}>
        <Menu>
          <MenuItem>
          {/* ********  now i am going to start to code Hamburger button ********* */}
            <main style={{ padding: 10 }}>
              <div>
                <button className="infoeditBtn" onClick={() => collapseSidebar()}>
                  <AiOutlineMenu />
                </button>
              </div>
            </main>
            {/* *********** end of Hamburger button code ******************** */}
          </MenuItem>
          {/******************** now i am going to start to code sidebar menu and  icon ***************** */}
        
          <NavLink to="/"> <MenuItem icon={<GrHomeRounded />}>Dashboard</MenuItem></NavLink>
          <SubMenu icon={<FcSalesPerformance />} label="Sales">
          <NavLink to="/sale/customer"><MenuItem icon={<FcCustomerSupport />}>Customer</MenuItem></NavLink>
          <NavLink to="/sale/lead"><MenuItem icon={<SiAtlassian />}>Transfer Lead</MenuItem></NavLink>
          </SubMenu>
          <SubMenu icon={<RiAdminFill />} label="Admin">
          <NavLink to="/Admin/account"><MenuItem icon={<MdAccountTree />} >Create User</MenuItem></NavLink>
          <NavLink to="/Admin/master"> <MenuItem icon={<SiMastercomfig />}>Master</MenuItem></NavLink>
          </SubMenu>
          <SubMenu icon={<SiCampaignmonitor />} label="Campaign">
          <NavLink to="/campaign/email"><MenuItem icon={<MdOutlineEmail />} >Email</MenuItem></NavLink>
          <NavLink to="/Campaign/whatsapp"><MenuItem icon={<SiWhatsapp />}>Whatsapp</MenuItem></NavLink>
          <NavLink to="/Campaign/sms"><MenuItem icon={<FcSms />}>SMS</MenuItem></NavLink>
          </SubMenu>
          <NavLink to="/report"> <MenuItem icon={<MdReportProblem />}>Report</MenuItem></NavLink>
          <NavLink to="/login"> <MenuItem icon={<MdLogout />}>Logout</MenuItem></NavLink>
          {/* ************************** end of code sidebar menu and  icon *********************************** */}
        </Menu>
      </Sidebar>
    </div>
  )
}
export default Sidebr;
