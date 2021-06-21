import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Manageorder.css';
import '../Dashboard/Dashboard/Dashboard.css';
import { useState } from 'react';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useEffect } from 'react';
const Manageorder = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true)
  const [orderList, setOrderList] = useState([]);
  const [updateStatus, setUpdateStatus] = useState(false);
  const HandleDasboardButton = () => {
    const DashboardSidebar = document.getElementById("dashboard-sidebar");
    const DashboardDetails = document.getElementById("dashboard-details")
    if (displaySidebar) {
      DashboardSidebar.style.display = "none";
      DashboardDetails.className = "col-md-12 col-lg-12 col-sm-12 col-12 dashboard-details"
      setDisplaySidebar(!displaySidebar)
    }
    else {
      DashboardSidebar.style.display = "block";
      DashboardDetails.className = "col-md-9 col-lg-9 col-sm-12 col-12 dashboard-details"
      setDisplaySidebar(!displaySidebar)
    }
  }
  useEffect(() => {
    fetch("https://nameless-wildwood-35129.herokuapp.com/orderProducts")
      .then(res => res.json())
      .then(data => setOrderList(data))
  }, [updateStatus])

  const[id,setId]=useState("");

  const HandleChangeStatus = (e) => {
    console.log(e.target.value,id);
    const status=e.target.value
    fetch('https://nameless-wildwood-35129.herokuapp.com/updateStatus/' + id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ status })
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setUpdateStatus(!updateStatus)
        }
        setUpdateStatus(false);
      })
      .catch(error=>{
        console.log(error)
      })
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
              <div className=" recent-order-list ">
                <table>
                  <thead>
                    <th>Id</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>User Address</th>
                    <th>Total Cost </th>
                    <th>Order Status</th>
                  </thead>
                  <tbody >
                    {orderList.length !== 0 &&
                      orderList.map(order =>
                        <tr>
                          <td id="id">{order._id}</td>
                          <td>{order.number}</td>
                          <td>{order.email}</td>
                          <td>{order.address}</td>
                          <td>{order.orderProduct.length}</td>
                          
                          
                          <td onClick={()=>setId(order._id)}>
                            <form>
                              <select onChange={HandleChangeStatus} >
                                <option>{order.status}</option>
                              <option value="Pending">Pending</option>
                              <option value="On Going">On Going</option>
                              <option value="Done">Done</option>

                              </select>
                            </form>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
                {
                  orderList.length === 0 && <div>
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
export default Manageorder;

