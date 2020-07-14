import React from 'react';
import { Redirect } from "react-router-dom";


export default class ResetPasswordForm extends React.Component {

  state = { redirect: false };

  resetPassword = (e) => {


    e.preventDefault();

    const newPassword = e.target.password.value;

    var myHeaders = new Headers();
    myHeaders.append("access-token", this.props.token);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("newPassword", newPassword);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/password/changepassword", requestOptions)
      .then((response) => {
        if (response.ok) {
          
          return response.text();
        }
        else {
          throw new Error();
        }
      })
      .then((result) => {
        alert(result);
        this.setState({ redirect: true });
      })
      .catch((error) => {
        alert(error);
      });

  }

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/admin' />;
    }

    return (
      <div className="app adminLogin">
        <div className="contentAdminWrapper">
          <form onSubmit={this.resetPassword} className="loginForm">
            <label>New Password:</label>
            <input type="password" name="password"></input>
            <button type="submit" className="formSubmit formButton admin">Envíar</button>
          </form>

        </div>
      </div>
    );
  };

}