import React from 'react';


export default class ResetPasswordForm extends React.Component {


  resetPassword = (e) => {


    e.preventDefault();

    const newPassword=e.target.password.value;

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
      .then(response => response.text())
      .then(result => alert(result))
      .catch(error => console.log('error', error));

  }

  render() {


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