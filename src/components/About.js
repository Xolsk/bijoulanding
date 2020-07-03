import React from 'react';

export default class About extends React.Component {


  render() {
    return (
      <div>
        <div className="app">
          {window.i18nData.homeWelcome}
        </div>
        <div className="appSecondPage">
          Segunda Pagina
      </div>
      </div>
    );
  }
}
