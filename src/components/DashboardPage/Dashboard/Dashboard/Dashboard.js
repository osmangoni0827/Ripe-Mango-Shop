import React from 'react';
import './Dashboard.css';
import { Link, NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBorderNone, faUser, faListAlt, faTasks, faUsersCog, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import OrderListInfo from '../OrderLlistInfo/OrderListInfo';
import Navbar from '../../../Shared/Navbar/Navbar';
const Dashboard = () => {

  const HandleDashboardButton = () => {

  }
  const [recentOrder, setRecentOrder] = useState([]);

  useEffect(() => {

    fetch('http://localhost:5200/orderProducts')
      .then(res => res.json())
      .then(data => setRecentOrder(data))
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <div className="row">
          <div className='header shadow d-flex justify-content-between align-items-center' >
                  <div className="d-flex align-items-center ">
                    <button className="navbar-toggler bg-light text-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon onClick={HandleDashboardButton} className='icon' icon={faBorderNone} size='2x' color="#00000" />

                    </button>
                    <h2>Dashboard</h2>
                  </div>
                  <div className="d-flex align-items-center user">
                  <img src="https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png" alt=""></img>
                    <h6>Mohammad Osman Goni</h6>
                  </div>
          </div>



        <div className="col-md-3 col-lg-3 col-sm-2 col-1 dashboard-sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 col-lg-9 col-sm-10 col-11">
          
          <div className="container">
            <div className="row dashboard-card ">
              <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                <div className="card text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon className='icon' icon={faUser} size='2x' color="#FFFFFF" />
                    <h2>Customer</h2>
                  </div>
                  <h2>78</h2>
                </div>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                <div className="card text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon className='icon' icon={faListAlt} size='2x' color="#00000" />
                    <h2>Order</h2>
                  </div>
                  <h2>120</h2>
                </div>
              </div>
              <div className='col-md-4 col-lg-4 col-sm-12 col-12'>
                <div className="card text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon className='icon' icon={faListAlt} size='2x' color="#00000" />
                    <h2>Products</h2>
                  </div>
                  <h2>10</h2>
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
                  {recentOrder.length === 0 ?
                    <div>
                      <td></td>  <h1 className='text-center py-5'> Order List is Empty</h1>
                    </div> :
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
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Dashboard;