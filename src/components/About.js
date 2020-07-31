import React from 'react';
import about from "../rsc/about.jpg"

export default class About extends React.Component {


  render() {
    return (
      <div className="content">
        <div className="app about">
          <div className="aboutContentContainer">
            <div className="imageWrapperAbout01">
                <div className="emptyStylishDiv"></div>
                <div className="actualImage">
                <img className="imageAbout01" src={about}/>
                </div>
            </div>
    
            <div className="textWrapperAbout01">
              <h5>Sobre la Empresa</h5>
              <h1>¿Qué es le Bijou?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur maximus elit, eu tempus nibh volutpat vel. Sed vel magna a turpis vulputate fringilla ut ac mi. Duis faucibus velit nec porttitor bibendum. Suspendisse posuere nisl eget massa maximus bibendum. Nullam at enim ut sapien luctus ultricies et ut turpis.
            </p>
            <br>
            </br>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur maximus elit, eu tempus nibh volutpat vel. Sed vel magna a turpis vulputate fringilla ut ac mi. Duis faucibus velit nec porttitor bibendum. Suspendisse posuere nisl eget massa maximus bibendum. Nullam at enim ut sapien luctus ultricies et ut turpis. 
            </p>
            </div>
        </div>
        </div>
      </div>
    );
  }
}
