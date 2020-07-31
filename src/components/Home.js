import React from 'react';
import '../services/localisationService.js';
import NewsCarousel from "../components/newsCarousel";

export default class Home extends React.Component {


  render() {
    return (
      <div className="content" >
        <div className="app home">
          <div className="coverText">
            <h2>
            {window.i18nData.homePageSub}
          </h2>
          <hr></hr>
          </div>
        </div>
           <NewsCarousel /> 
        <div className="appThirdPage values">
          <div className="valuesWrapper">
            <div className="container" >
            <div className="textBox left">
            {window.i18nData.value01}
              </div>
              <div className="arrowPosition">
                <div className="arrow-down left"></div>
              </div>
              <div className="information left">
                <p>
                {window.i18nData.value01text}
                </p>
              </div>
            </div>
            <div className="container" >

              <div className="textBox center">
              {window.i18nData.value02}
              </div>
              <div className="arrowPosition">
                <div className="arrow-down center"></div>
              </div>
              <div className="information center">
                <p>
                {window.i18nData.value02text}
                </p>
              </div>
            </div>
            <div className="container" >
              <div className="textBox right">
              {window.i18nData.value03}
              </div>
              <div className="arrowPosition">
                <div className="arrow-down right"></div>
              </div>
              <div className="information right">
                <p>
                {window.i18nData.value03text}
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
