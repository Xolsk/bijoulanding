import React from 'react';
import './App.css';
import About from "./components/About.js";
import Team from "./components/Team.js";
import Home from "./components/Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import './services/localisationService.js';



export default class App extends React.Component {

  changeLanguage = (e) => {

    window.changeLanguage(e.target.value);
    this.forceUpdate();
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div className="header" >
            <ul className="navBar" >
              <li>
                <Link to="/">{window.i18nData.home}</Link>
              </li>
              <li>
                <Link to="/about">{window.i18nData.about}</Link>
              </li>
              <li>
                <Link to="/team">{window.i18nData.team}</Link>
              </li>
              <li>
                <a href="http://lebijou.es">{window.i18nData.store}</a>
              </li>
            </ul>
            <div>
              <select onChange={this.changeLanguage} >
                <option value="en">EN</option>
                <option value="es">ES</option>
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
              <Route path="/">
                <Home />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}


