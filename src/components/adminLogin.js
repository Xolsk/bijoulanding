import React from "react";
import { Redirect } from "react-router-dom";

export default class AdminSection extends React.Component {

  state = { redirect: false };

  login = (e) => {

    e.preventDefault();
    const password = e.target.password.value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("password", password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/authenticate", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error("Password incorrecto");
        }
      })
      .then((response) => {
        
        localStorage.setItem("token", response.token);
         this.setState({ redirect: true });
      })
      .catch((error) => {
        alert(error);
      });

  }

  resetPassword = () => {

    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch("http://localhost:4000/password/passwordreset", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        else {
          throw new Error("Credenciales inválidas");
        }
      })
      .then((response) => {
        alert("Se ha mandado un email al correo de Le Bijou.")
      })
      .catch((error) => {
        alert(error);

      });


  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/dashboard' />;
    }
    else {



      return (
        <div className="app adminLogin">
          <div className="contentAdminWrapper">
            <form onSubmit={this.login} className="loginForm">
              <label>Password:</label>
              <input type="password" name="password"></input>
            </form>
            <button onClick={this.resetPassword} className="formSubmit formButton admin">Password olvidado? Click aquí</button>
          </div>
        </div>
      )
    }
  }
}
