import React from "react";
import {
  NavLink,

} from "react-router-dom";
import burger from "../rsc/burgermenu.png";


export default class BurgerMenu extends React.Component {

  state = { displayburger:"visible", switchTo:"Switch to English Version", className:"menuList" };

  showMenu = () => {

      this.setState( {displayburger:"hidden", className:"menuList visible" })
    
  }

  closeMenu=(e)=>{

    e.stopPropagation();

    this.setState({className:"menuList",displayburger:"visible"})

  }

  render() {

    return (
      <div className="burger">
        <div onClick={this.showMenu} >
          <img alt="burger" src={burger} style={{visibility:this.state.displayburger}}className= "burgerIcon" />
        </div>
        <div  onClick={this.closeMenu}className={this.state.className}>
          <ul className="navBurger" >
            <li >
              <NavLink to="/home">{window.i18nData.home}</NavLink>
            </li>
            <li>
              <NavLink  to="/about">{window.i18nData.about}</NavLink>
            </li>
            <li>
              <NavLink  to="/product">{window.i18nData.product}</NavLink>
            </li>
            <li>
              <NavLink  to="/team">{window.i18nData.team}</NavLink>
            </li>
            <li>
              <a href="http://lebijou.es">{window.i18nData.store}</a>
            </li>
            <li>
              <NavLink  to="/contact">{window.i18nData.contact}</NavLink>
            </li>
            <li>
              {this.state.switchTo}
            </li>

          </ul>
        </div>
      </div>


    )
  }
}