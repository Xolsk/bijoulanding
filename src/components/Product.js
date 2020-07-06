import React from 'react';

export default class Product extends React.Component {


    render(){
  return (
    <div className="content">
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
