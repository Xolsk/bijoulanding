import React from 'react';
import './App.css';
import About from "./components/About.js";
import Team from "./components/Team.js";
import Product from "./components/Product.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import AdminLogin from "./components/AdminLogin.js";
import AdminPage from "./components/AdminPage.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./components/ResetPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import './services/localisationService.js';
import logo from './rsc/Logo Long.png';



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
          <ScrollToTop />
          <div className="header" >
            <div className="headerElement left">
              <div className="navImageWrapper">
                <NavLink to="/home">
                <img className="navBarLogo" src={logo} alt="Le Bijou Logo"></img>
                </NavLink>
              </div>
              <div>

              </div>
            </div>

            <div className="headerElement nav">
              <ul className="navBar" >
                <li >
                  <NavLink  activeClassName='is-active' to="/home">{window.i18nData.home}</NavLink>
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
              <PublicRoute restricted={false} component={About} path="/about" />
              <PublicRoute restricted={false} component={Team} path="/team" />
              <PublicRoute restricted={false} component={Contact} path="/contact" />
              <PublicRoute restricted={false} component={Product} path="/product" />
              <PublicRoute restricted={false} component={Home} path="/home" />
              <PublicRoute restricted={true} component={AdminLogin} path="/admin" />
              <PrivateRoute component={AdminPage} path="/dashboard" />
              <Route path="/resetpassword/:token" children={<ResetPassword/>}/>
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
              </ul>
            </div>
            <div>
              <ul>
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
              <p>Carrer Eduard Maristany 336-350</p>
              <p>08918  Badalona</p>
            </div>
            <div className="footerContact">
              <p>Instagram</p>
              <p>Facebook</p>
              <a href="#" mailto="info@lebijou.es">info@lebijou.es</a>
            </div>
          </div>
        </Router>
      </div >


    );
  }
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

