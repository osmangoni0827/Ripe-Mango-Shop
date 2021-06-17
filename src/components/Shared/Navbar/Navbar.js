import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const TotalOrder = useSelector(count => count.TotalOrder);
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-dark navbar ">
            <div className="container-fluid title">
                {/* Title */}
                <h6 className="navbar-brand " href="#">Ripe Mango Shop</h6>
                {/* Menu Button for responsive */}
                <button className="navbar-toggler bg-light text-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* All Menus */}
                <div className="collapse navbar-collapse " id="navbarNav">
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

                <li>
                    <Link to="">
                        <img src="https://i.ibb.co/sH6xDVr/gentelman1-removebg-preview.png" alt=""></img>
                    </Link>
                </li>

            </div>
        </nav>
    );
};
export default Navbar;

