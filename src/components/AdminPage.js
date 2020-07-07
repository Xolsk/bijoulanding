import React from 'react';
import { Redirect } from "react-router-dom";
import NewsForm from "./NewsForm";

export default class AdminPage extends React.Component {

  state = { redirect: false };

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
  }

  logout=()=>{

    localStorage.clear();
    this.setState({redirect:true});
  }

  render() {

    const redirect = this.state.redirect;

    if (redirect) {
      localStorage.removeItem("token");
      return <Redirect to='/admin' />;
    }
    else {

      return (

        <div className="app">
          <NewsForm/>
          <button onClick={this.logout}> Salir</button>
        </div>
      )

    }
  }
}