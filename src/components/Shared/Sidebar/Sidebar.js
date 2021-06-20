import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBorderNone,faUser ,faListAlt,faTasks,faUsersCog,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css'; 
const Sidebar = () => {
   
    return (
        
            <div className="sidebar sticky-top">
                <div className="sidebarImg">
                <img src="https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png" alt=""></img>
                </div>
                <Link to="/dashboard">
                <div className='d-flex align-items-center dashboard'>
                <FontAwesomeIcon className='icon' icon={faBorderNone} size='2x' color="#00000" />
                <h3>Dashboard</h3>
                </div>
                </Link>
                <ul className="navbar-nav ">
                    <li className="nav-item menu d-flex  align-items-center p-2">
                    <FontAwesomeIcon className='icon' icon={faUser} size='2x' color="#FFFFFF" />
                    <NavLink activeClassName="active" className="nav-link " to="/customer">Customers</NavLink>
                    </li>
                    <li className="nav-item menu d-flex  align-items-center p-2">
                        <FontAwesomeIcon className='icon' icon={faListAlt} size='2x' color="#FFFFFF" />
                        <NavLink activeClassName="active" className="nav-link " to='/orderList'>Order List</NavLink>
                    </li>
                    <li className="nav-item menu d-flex  align-items-center  p-2">
                    <FontAwesomeIcon className='icon' icon={faTasks} size='2x' color="#FFFFFF" />

                        <NavLink activeClassName="active" className="nav-link " to='/manageOrder'>Manage Order</NavLink>
                    </li>
                    <li className="nav-item menu d-flex  align-items-center p-2 ">
                    <FontAwesomeIcon className='icon' icon={faPlusCircle} size='2x' color="#FFFFFF" />

                        <NavLink activeClassName="active" className="nav-link " to='/addProduct/Ripe-Mango'>Add Mango Product</NavLink>
                    </li>

                    <li className="nav-item menu d-flex  align-items-center p-2 ">
                    <FontAwesomeIcon className='icon' icon={faPlusCircle} size='2x' color="#FFFFFF" />
                        <NavLink activeClassName="active" className="nav-link " to='/addProduct/Chutney'>Add Chutney Recipe</NavLink>
                    </li>

                    <li className="nav-item menu d-flex  align-items-center  p-2">
                    <FontAwesomeIcon className='icon' icon={faPlusCircle} size='2x' color="#FFFFFF" />
                        <NavLink activeClassName="active" className="nav-link " to='/addProduct/Pickle'>Add Mango Pickle</NavLink>
                    </li>
                    <li className="nav-item menu d-flex  align-items-center  p-2">
                    <FontAwesomeIcon className='icon' icon={faUsersCog} size='2x' color="#FFFFFF" />
                        <NavLink activeClassName="active" className="nav-link " to='/makeAdmin'>Create New Admin</NavLink>
                    </li>
                </ul>
            </div>


    );
};

export default Sidebar;