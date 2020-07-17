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
    const newNews = this.state.slideInformation;
    const currentToken = localStorage.getItem("token");
    myHeaders.append("access-token", currentToken);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("newNews", JSON.stringify(newNews));

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


  onDragOver = (event) => {
    event.preventDefault();
  }

  getDraggedCard = () => {

    const { draggedCard } = this.state;


    return draggedCard;
  }

  onDropParentData = (receiverCard) => {

    let {slideInformation}=this.state;
    let draggedCard = this.state.draggedCard;

    const indexDragged= slideInformation.findIndex((element)=>element.id===draggedCard.id)
  
    const indexReceiver= slideInformation.findIndex((element)=>element.id===receiverCard.id)

    let draggedCardIdStorage = this.state.draggedCard.id;
    
    draggedCard.id = receiverCard.id;
    receiverCard.id = draggedCardIdStorage;

    slideInformation.splice(indexDragged,1,draggedCard);
    slideInformation.splice(indexReceiver,1,receiverCard);

    this.setState({slideInformation});

  }


  onDrag = (event, slide) => {

    event.preventDefault();
    this.setState({ draggedCard: slide })

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

              {this.state.slideInformation.map((slide,index) => {

                return (
                  <CardFormBody

                    getDraggedCard={this.getDraggedCard}
                    key={index}
                    onDropParentData={this.onDropParentData}
                    onDrag={this.onDrag}
                    slide={slide}
                    onDragOver={this.onDragOver}

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