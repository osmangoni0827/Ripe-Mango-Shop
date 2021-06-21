import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Customer.css';
import '../Dashboard/Dashboard/Dashboard.css';
import { useState } from 'react';
import { faBorderNone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useEffect } from 'react';
const Customer = () => {
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
    const [customerDetails,setcustomerDetails]=useState([]);
    useEffect(()=>{
      fetch("https://nameless-wildwood-35129.herokuapp.com/orderProducts")
      .then(res=>res.json())
      .then(data=>setcustomerDetails(data))
    },[])
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
                        <div className=" recent-order-list ">
                <table>
                  <thead>
                    <th>User Name</th>
                    <th>Number</th>
                    <th>Alternative Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Address</th>
                  </thead>
                  <tbody >
                    {customerDetails.length !== 0 &&
                      customerDetails.map(customer =>
                        <tr>
                          
                          <td>{customer.name}</td>
                          <td>{customer.number}</td>
                          <td>{customer.altNumber}</td>
                          <td>{customer.email}</td>
                          <td>{customer.country}</td>
                          <td>{customer.address}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
                {
                  customerDetails.length === 0 && <div>
                    <h1 className='text-center py-5'> Order List is Empty</h1>
                  </div>
                }
              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;