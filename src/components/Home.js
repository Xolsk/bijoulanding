import React from 'react';
import '../services/localisationService.js';
import landing from "../rsc/landing.jpg";
import NewsCarousel from "../components/newsCarousel";

export default class Home extends React.Component {


  render() {
    return (
      <div >
        <div className="app home">
          <div className="coverText">
            <h2> LE BIJOU </h2>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <NewsCarousel />
        <div className="appThirdPage">
          <div className="containerWrapper">
            <div className="container" >

              <div className="textBox left">
                container01
              </div>
              <div className="arrowPosition">
                <div className="arrow-down left"></div>
              </div>
              <div className="information left">
                INFOR
              </div>
            </div>
            <div className="container" >

              <div className="textBox center">
                container01
              </div>
              <div className="arrowPosition">
                <div className="arrow-down center"></div>
              </div>
              <div className="information center">
                INFOR
              </div>
            </div>
            <div className="container" >
              <div className="textBox right">
                container01
              </div>
              <div className="arrowPosition">
                <div className="arrow-down right"></div>
              </div>
              <div className="information right">
                INFOR
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
