import React from 'react';


export default class ResetPasswordForm extends React.Component {


  resetPassword = () => {

    var myHeaders = new Headers();
    myHeaders.append("access-token", this.props.token);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("newPassword", "test2");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/password/changepassword", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));



  }

  render() {


    return (
      <div className="app adminLogin">
        <div className="contentAdminWrapper">
          <form onSubmit={this.login} className="loginForm">
            <label>New Password:</label>
            <input type="password" name="password"></input>
            <button onClick={this.resetPassword} className="formSubmit formButton admin">Envíar</button>
          </form>

        </div>
      </div>
    );
  };

}