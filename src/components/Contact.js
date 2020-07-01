import React from 'react';
import '../services/localisationService.js';

export default class Contact extends React.Component {


  render() {
    return (
      <div>
        <div className="app">
          {window.i18nData.homeWelcome}
        </div>
        <div className="appSecondPage">
          Segunda Pagina
  </div>
        <div className="appThirdPage">
          Third
  </div>
      </div>
    );
  }
}
