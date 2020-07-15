import React from 'react';
import { Redirect } from "react-router-dom";
import CardFormBody from "./CardFormBody";

export default class AdminPage extends React.Component {

  constructor(props) {

    super(props);
    this.state = { redirect: false, slideInformation: [] };

    this.setFormData = this.setFormData.bind(this);

  }

  componentDidMount() {

    const currentToken = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("access-token", currentToken);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/verifytoken", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error("Credenciales inválidas");
        }
      })
      .then((response) => {

        this.setState({ redirect: false });
      })
      .catch((error) => {
        alert(error);
        this.setState({ redirect: true });
      });


    var requestOptions2 = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/news/read", requestOptions2)
      .then(response => response.json())
      .then(result => this.setState({ slideInformation: result }))
      .catch(error => console.log('error', error));

  }

  logout = () => {

    localStorage.clear();
    this.setState({ redirect: true });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let myHeaders = new Headers();
    const newNews=this.state.slideInformation;
    const currentToken = localStorage.getItem("token");
    myHeaders.append("access-token", currentToken);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("newNews",JSON.stringify(newNews) );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/news/savenew", requestOptions)
      .then(response => response.text())
      .then(result => alert("Noticias salvadas"))
      .catch(error => console.log('error', error));

  }

  setFormData = (state, activeSlide) => {


    const currentNews = this.state.slideInformation;

    const indexToModify = currentNews.findIndex(card => card.id === activeSlide);

    currentNews.splice(indexToModify, 1, state);

    this.setState({ slideInformation: currentNews });

  }
  render() {

    const redirect = this.state.redirect;

    if (redirect) {
      localStorage.removeItem("token");
      return <Redirect to='/admin' />;
    }
    else {

      return (

        <div className="app adminPage">
          <form onSubmit={this.handleSubmit} className="newsFormWrapper">
            <div className="generalWrapper">

              {this.state.slideInformation.map((slide) => {

                return (
                  <CardFormBody
                    slide={slide}
                    key={slide.id}
                    setFormData={this.setFormData}
                  />
                )
              })}

            </div>
            <div>
              <button onClick={this.logout}> Salir</button>
              <p>NOTA: las imagenes deben ser de un formato 600x400 o proporcional para su óptima visualización en la página.</p>
              <button type="submit">Salvar Cambios</button>
            </div>
          </form>
        </div>
      )

    }
  }
}