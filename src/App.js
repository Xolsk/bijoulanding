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
import NavBar from "./components/NavBar";
import BurgerMenu from "./components/BurgerMenu.js";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./components/ResetPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import en from './langs/en'
import es from './langs/es'




export default class App extends React.Component {


  componentDidMount() {

    const languages = {
      en,
      es
    };

    if (window.navigator.language === "en") {

      document.getElementById("enSelector").setAttribute("selected", true);
      this.setState({ language: languages.en })

    }
    else {

      document.getElementById("esSelector").setAttribute("selected", true);
      this.setState({ language: languages.es })
    }

  }

  changeLanguage = (e) => {

    window.changeLanguage(e.target.value);
    const activeLanguage = window.i18nData;
    this.setState({ activeLanguage })
  }


  render() {


    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <NavBar language={this.state} changeLanguage={this.changeLanguage} />
          <BurgerMenu language={this.state} changeLanguage={this.changeLanguage} />
          <Switch>
            <PublicRoute restricted={false} component={About} path="/about" />
            <PublicRoute restricted={false} component={Team} path="/team" />
            <PublicRoute restricted={false} component={Contact} path="/contact" />
            <PublicRoute restricted={false} component={Product} path="/product" />
            <PublicRoute restricted={false} component={Home} path="/home" />
            <PublicRoute restricted={true} component={AdminLogin} path="/admin" />
            <PrivateRoute component={AdminPage} path="/dashboard" />
            <Route path="/resetpassword/:token" children={<ResetPassword />} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>

          </Switch>
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

