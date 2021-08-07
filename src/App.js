import React from 'react'
import { Route } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';

import $ from 'jquery';




//const App = () => {
  function App() {
  return (

    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/Home"}>Home</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Register"}>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">

            <>

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Register">
                <Register />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Result">
                <Login />
              </Route>
            </>
          </div>
        </div>
      </div>
      </Router>
  );
}

export default App
