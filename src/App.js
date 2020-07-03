import React from 'react';
import './App.css';
import About from "./components/About.js";
import Team from "./components/Team.js";
import Product from "./components/Product.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import AdminLogin from "./components/adminLogin.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import './services/localisationService.js';
import logo from './rsc/LeBijouIcon.png';



export default class App extends React.Component {

  componentDidMount() {

    if (window.navigator.language === "en") {

      document.getElementById("enSelector").setAttribute("selected", true);

    }
    else {

      document.getElementById("esSelector").setAttribute("selected", true);
    }


  }

  changeLanguage = (e) => {

    window.changeLanguage(e.target.value);
    this.forceUpdate();
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div className="header" >
            <div className="headerElement left">
              <div className="navImageWrapper">
                <img className="navBarLogo" src= {logo} alt="Le Bijou Logo"></img>
              </div>
            </div>

            <div className="headerElement nav">
              <ul className="navBar" >
                <li>
                  <NavLink activeClassName='is-active' to="/home">{window.i18nData.home}</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='is-active' to="/about">{window.i18nData.about}</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='is-active' to="/product">{window.i18nData.product}</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='is-active' to="/team">{window.i18nData.team}</NavLink>
                </li>
                <li>
                  <a href="http://lebijou.es">{window.i18nData.store}</a>
                </li>
                <li>
                  <NavLink activeClassName='is-active' to="/contact">{window.i18nData.contact}</NavLink>
                </li>
              </ul>
            </div>
            <div className="headerElement right">
              <select onChange={this.changeLanguage} >
                <option id="esSelector" value="es">ES</option>
                <option id="enSelector" value="en">EN</option>
              </select>
            </div>
          </div>
          <div>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/admin">
                  <AdminLogin/>
              </Route>
              <Route path="/">
                <Redirect to="/home" />
              </Route>

            </Switch>
          </div>


          <div className="footer">
            <div>
              <ul>
                <li>
                  <NavLink to="/home">{window.i18nData.home}</NavLink>
                </li>
                <li>
                  <NavLink to="/about">{window.i18nData.about}</NavLink>
                </li>
                <li>
                  <NavLink to="/team">{window.i18nData.team}</NavLink>
                </li>
                <li>
                  <NavLink to="/product">{window.i18nData.product}</NavLink>
                </li>
                <li>
                  <a href="http://lebijou.es">{window.i18nData.store}</a>
                </li>
                <li>
                  <NavLink to="/contact">{window.i18nData.contact}</NavLink>
                </li>
              </ul>
            </div>

            <div className="footerContact">
              <p>AyC Creaciones</p>
              <p>Aqui va la dirección</p>
              <p>Segunda línea Direccion</p>
              <a mailto="info@lebijou.es">info@lebijou.es</a>
              <p>93 345 46 34</p>
            </div>
            <div className="footerContact">
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
          </div>
        </Router>
      </div>


    );
  }
}


