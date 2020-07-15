import React from "react";
import {
    NavLink,

  } from "react-router-dom";
  import logo from "../rsc/Logo Long.png";


export default class NavBar extends React.Component{



render(){

    return (
    <div className="header" >
    <div className="headerElement left">
      <div className="navImageWrapper">
        <NavLink className="imageLink" to="/home">
        <img className="navBarLogo" src={logo} alt="Le Bijou Logo"></img>
        </NavLink>
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
    )
      }
}