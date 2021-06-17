
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
function App() {
  return (
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
          <Route path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <Route path="/product/:ProductId/:ProductType">
            <Orders></Orders>
          </Route>
          <Route path='/order-cart'>
           <OrderCart></OrderCart>
          </Route>
          <Route path="/notification">

          </Route>
          <Route path="/user-account">

          </Route>
    
        </Switch>
   </Router>

  );
}

export default App;
