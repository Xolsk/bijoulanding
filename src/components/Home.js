import React from 'react';
import '../services/localisationService.js';
import bigLogo from "../rsc/Logo Big.png";
import NewsCarousel from "../components/newsCarousel";

export default class Home extends React.Component {


  render() {
    return (
      <div className="content" >
        <div className="app home">
          <div className="coverText">
            <img  alt="bigLogo" className="bigLogo" src={bigLogo} />
            <h1>Le Bijou</h1>
            <h2>
              Tu mayorista de bisutería y complementos desde hace más de 10 años.
          </h2>
          </div>
        </div>
           {/* <NewsCarousel />  */}
        <div className="appThirdPage">
          <div className="valuesWrapper">
            <div className="container" >
            <div className="textBox left">
                Agilidad
              </div>
              <div className="arrowPosition">
                <div className="arrow-down left"></div>
              </div>
              <div className="information left">
                <p>
                  pharetra erat vel, pulvinar sapien. Cras tincidunt felis purus, eget scelerisque lectus interdum sit amet.
                </p>
              </div>
            </div>
            <div className="container" >

              <div className="textBox center">
                Compromiso
              </div>
              <div className="arrowPosition">
                <div className="arrow-down center"></div>
              </div>
              <div className="information center">
                <p>
                  pharetra erat vel, pulvinar sapien. Cras tincidunt felis purus, eget scelerisque lectus interdum sit amet.
                </p>
              </div>
            </div>
            <div className="container" >
              <div className="textBox right">
                Personalidad
              </div>
              <div className="arrowPosition">
                <div className="arrow-down right"></div>
              </div>
              <div className="information right">
                <p>
                  pharetra erat vel, pulvinar sapien. Cras tincidunt felis purus, eget scelerisque lectus interdum sit amet.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
