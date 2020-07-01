import React from 'react';
import '../services/localisationService.js';
import landing from "../rsc/landing.jpg";
import NewsCarousel from "../components/newsCarousel";

export default class Home extends React.Component {

  state = { box1: "none", box2: "none", box3: "none" };

  displayBox = (box) => {

    let display = this.state;
    display[box] = "flex";
    this.setState({display});
    console.log(this.state);

  }

  hideBox = (box) => {

    let display = this.state;
    display[box] = "none";
    this.setState({display});
    console.log(this.state);


  }

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
            <div className="container">
              <div className="textBox"
                onMouseEnter={() => { this.displayBox("box1") }}
                onMouseLeave={() => { this.hideBox("box1") }}>
                container01
              </div>
              <div className="arrowPosition">
                <div className="arrow-down"></div>
              </div>
              <div style={{ display: this.state.box1 }} className="information">
                INFOR
              </div>
            </div>
            <div className="container">
              <div className="textBox" onMouseEnter={() => { this.displayBox("box2") }}
                onMouseLeave={() => { this.hideBox("box2") }}>
                container02
              </div>
              <div className="arrowPosition">
                <div className="arrow-down"></div>
              </div>
              <div style={{ display: this.state.box2 }} className="information">
                INFOR
              </div>
            </div>
            <div className="container">
              <div onMouseEnter={() => { this.displayBox("box3") }}
                onMouseLeave={() => { this.hideBox("box3") }} className="textBox">
                container01
              </div>
              <div className="arrowPosition">
                <div className="arrow-down"></div>
              </div>
              <div style={{ display: this.state.box3 }} className="information">
                INFOR
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
