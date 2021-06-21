import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Model from '../../Model/Model';
import firebase from "firebase/app";
import { useContext } from 'react';
import { loggedInContext } from '../../../App';

const Navbar = () => {
    const isLogin=sessionStorage.getItem('token');
    const TotalOrder = useSelector(count => count.TotalOrder);
    const[loggedInUser,setLoggedInUser]=useContext(loggedInContext);
    const HandleSignOut=()=>{
        firebase.auth().signOut().then(() => {
            setLoggedInUser({})
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('email')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-dark navbar ">
            <div className="container-fluid title">
                {/* Title */}
                {/* Menu Button for responsive */}
                <button className="navbar-toggler bg-light text-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    
                {/* All Menus */}
                <div className="collapse navbar-collapse " id="navbarNav">
                <h6 className="navbar-brand text-center" href="#">Ripe Mango Shop</h6>
                    <ul className="navbar-nav ml-auto  ">

                        <li className="nav-item menu">
                            <NavLink activeClassName="active" className="nav-link " to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link " to='/about'>About</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link " to='/contact'>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link " to='/dashboard'>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <li>
                    <Link to="" className="cart-quantity notification" >
                        <span style={{ visibility: "inherit", opacity: 1 }}>1</span>
                        <FontAwesomeIcon className='icon' icon={faBell} size='2x' color="#FFFFFF" />
                    </Link>
                </li>

                <li>
                    <Link to="/order-cart" className="cart-quantity">
                        {
                            TotalOrder && <span style={{ visibility: "inherit", opacity: 1 }}>{TotalOrder}</span>
                        }
                        <FontAwesomeIcon className='icon' icon={faShoppingCart} size='2x' color="#FFFFFF" />
                    </Link>
                </li>
                 {/* <Model></Model> */}
                <li>
                    {
                        !isLogin?<Link to='/login'><button className="btn btn-primary">Sign In</button></Link>:<button onClick={HandleSignOut} className="btn btn-primary">Sign Out</button>
                    }
                    
                </li>
            </div>
        </nav>
    );
};
export default Navbar;

