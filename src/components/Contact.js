import React from 'react';
import '../services/localisationService.js';

export default class Contact extends React.Component {


  handleSubmit = (e) => {

    e.preventDefault();

    const name = e.target.name.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const text = e.target.text.value;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("lastName", lastName);
    urlencoded.append("email", email);
    urlencoded.append("text", text);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/contact", requestOptions)
      .then(response => response.text())
      .then(result => alert(result))
      .catch(error => console.log('error', error));

  }
  render() {
    return (
      <div className="content">
        <div className="formWrapper">
          <div className="contactText">
            <h1>¡Contacta con Le Bijou!</h1>
            <a href="mailto:info@lebijou.es">info@lebijou.es</a>
            <a href="92939393">933949959</a>
          </div>
          <form onSubmit={this.handleSubmit} className="contactForm">
            <div className="formData">
              <input id="name" type="text" name="name" placeholder="Nombre" required></input>
              <input id="lastName" type="text" name="lastName" placeholder="Apellido"></input>
              <input id="email" type="email" name="email" placeholder="Email" required></input>
              <input id="business" type="text" name="business" placeholder="Empresa"></input>
            </div>
            <div className="formSubmit">
              <textarea name="text" placeholder="Escriba aquí su mensaje" />
              <button type="submit">Envía</button>
            </div>
          </form>

        </div>
      </div>
    );
  }
}
