import React from 'react';
import './MakeAdmin.css';
import Navbar from '../../Shared/Navbar/Navbar';
import '../Dashboard/Dashboard/Dashboard.css';
import { useState } from 'react';
import { faBorderNone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../Shared/Sidebar/Sidebar';
const MakeAdmin = () => {
    const[displaySidebar,setDisplaySidebar]=useState(true)
    const HandleDasboardButton=()=>{
        const DashboardSidebar= document.getElementById("dashboard-sidebar");
        const DashboardDetails= document.getElementById("dashboard-details")
        if(displaySidebar){
            DashboardSidebar.style.display="none";
            DashboardDetails.className="col-md-12 col-lg-12 col-sm-12 col-12 dashboard-details"
            setDisplaySidebar(!displaySidebar)
        }
        else{
            DashboardSidebar.style.display="block";
            DashboardDetails.className="col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details"
            setDisplaySidebar(!displaySidebar)
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="header d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center headerButton">
                    <button onClick={HandleDasboardButton} className="btn ">
                    <FontAwesomeIcon className='icon' icon={faBorderNone} size='2x' color="#00000" />
                    </button>
                    <h2>Dashboard</h2>
                </div>
                <div className="d-flex align-items-center user">
                <img src="https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png" alt=""></img>
                    <h6>Mohammad Osman Goni</h6>
                </div>
            </div>
            <div className=" dashboard">
                <div className="row">
                    {/* Dashboard Sidebar */}
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 dashboard-sidebar" id="sidebar">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details" id="dashboard-details">
                        <div className="dashboard-info container">
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
