import React from 'react';
import '../services/localisationService.js';

export default class Home extends React.Component {


    render(){
  return (
    <div className="App">
      {window.i18nData.homeWelcome}
    </div>
  );
}
}
