
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import Orders from './components/Orders/Orders';
import OrderCart from './components/OrderCarts/OrderCart/OrderCart';
import Dashboard from './components/DashboardPage/Dashboard/Dashboard/Dashboard';
import Customer from './components/DashboardPage/Customer/Customer';
import Manageorder from './components/DashboardPage/Manageorder/Manageorder';
import MakeAdmin from './components/DashboardPage/MakeAdmin/MakeAdmin';
import AddProduct from './components/DashboardPage/AddProduct/AddProduct';
import OrderList from './components/DashboardPage/OrderLists/OrderList/OrderList';
import { useState } from 'react';
import { createContext } from 'react';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
export const loggedInContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <loggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/product/:ProductId/:ProductType">
            <Orders></Orders>
          </Route>
          <PrivateRoute path='/order-cart'>
            <OrderCart></OrderCart>
          </PrivateRoute>
          <Route path="/manageOrder">
            <Manageorder></Manageorder>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addProduct/:productType">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/notification">
          </Route>
          <Route path="/user-account">
          </Route>
          <Route path="/customer">
            <Customer></Customer>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/shipping">
            <Shipping></Shipping>
          </Route>
        </Switch>
      </Router>
    </loggedInContext.Provider>
  );
}

export default App;
