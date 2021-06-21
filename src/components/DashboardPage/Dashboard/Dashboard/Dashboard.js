import React from 'react';
import './Dashboard.css';
import { faBorderNone, faUser, faListAlt, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
const Dashboard = () => {
  const [recentOrder, setRecentOrder] = useState([]);
  const [displaySidebar, setdisplaySidebar] = useState(true);
  useEffect(() => {

    fetch('https://nameless-wildwood-35129.herokuapp.com/orderProducts')
      .then(res => res.json())
      .then(data => setRecentOrder(data))
  }, [])

  const HandleDasboardButton = () => {
    const sidebar = document.getElementById("sidebar");
    const dashboardDetails = document.getElementById("dashboard-details");
    if (displaySidebar) {
      sidebar.style.display = `none`;
      dashboardDetails.className = "col-md-12 col-lg-12 col-sm-12 col-12 dashboard-details";
      setdisplaySidebar(!displaySidebar)
    }
    else {
      sidebar.style.display = `block`;
      dashboardDetails.className = "col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details";
      setdisplaySidebar(!displaySidebar)
    }
  }
  const TotalProduct=recentOrder.reduce((acc,curr)=>acc+curr.orderProduct.length,0)
  return (
    <div >
      <Navbar></Navbar>
      {/* Dashboard Header */}
      <div className='header shadow d-flex justify-content-between align-items-center' >
        <div className="d-flex align-items-center headerButton">
          <button onClick={HandleDasboardButton} className="btn ">
            {/* <span className="navbar-toggler-icon"></span> */}
            <FontAwesomeIcon className='icon' icon={faBorderNone} size='2x' color="#00000" />
          </button>
          <h2>Dashboard</h2>
        </div>
        <div className="d-flex align-items-center user">
          <img src="https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png" alt=""></img>
          <h6>Mohammad Osman Goni</h6>
        </div>
      </div>

      <div className="dashboard">
        <div className="row">
          {/* Dashboard Sidebar */}
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 dashboard-sidebar" id="sidebar">
            <Sidebar></Sidebar>
          </div>
          {/* Dashboard Home Page */}
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details" id="dashboard-details">
            <div className="container dashboard-Info ">
              <div className="row ">
                <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                  <div className="card text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon className='icon' icon={faUser} size='2x' color="#FFFFFF" />
                      <h2>Customer</h2>
                    </div>
                    <h2>{recentOrder.length}</h2>
                  </div>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                  <div className="card text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon className='icon' icon={faListAlt} size='2x' color="#00000" />
                      <h2>Order</h2>
                    </div>
                    <h2>{recentOrder.length}</h2>
                  </div>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                  <div className="card text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon className='icon' icon={faListAlt} size='2x' color="#00000" />
                      <h2>Products</h2>
                    </div>
                    <h2>{TotalProduct}</h2>
                  </div>
                </div>
              </div>
              <div className=" recent-order-list ">
                <table>
                  <thead>
                    <th>Id</th>
                    <th>
                      Total Product
                    </th>
                    <th>User Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Order Status</th>
                  </thead>
                  <tbody >
                    {recentOrder.length !== 0 &&
                      recentOrder.map(order =>
                        <tr>
                          <td>{order._id}</td>
                          <td>{order.orderProduct.length}</td>
                          <td>{order.name}</td>
                          <td>{order.number}</td>
                          <td>{order.email}</td>
                          <td>{order.status}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
                {
                  recentOrder.length === 0 && <div>
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
export default Dashboard;