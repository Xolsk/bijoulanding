import React from 'react';
import { Redirect } from "react-router-dom";
import CardFormBody from "./CardFormBody";

export default class AdminPage extends React.Component {


  constructor(props) {
    super(props)
    this.state = { redirect: false, slideInformation: [] };


    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this)

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

  setFormData = (inputData, activeSlide) => {

    console.log(inputData, activeSlide)


  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event) => {

    let { slideInformation } = this.state;
    const receiverId = event.target.name;
    const indexReceiver = slideInformation.findIndex((element) => element.id === receiverId);
    const receiver = slideInformation[indexReceiver]

    let incomingCard = this.state.draggedCard;
    const indexDragged = slideInformation.findIndex((element) => element.id === incomingCard.id)

    receiver.id = incomingCard.id;
    incomingCard.id = receiverId;
    slideInformation.splice(indexReceiver, 1, receiver);
    slideInformation.splice(indexDragged, 1, incomingCard);

    slideInformation.sort((a, b) => (a.id > b.id) ? 1 : (a.id === b.id) ? ((a.id > b.id) ? 1 : -1) : -1)
    this.setState({ slideInformation, draggedCard: "" }, () => { this.forceUpdate() });

  }

  setOnDrag = (sender) => {

    this.setState({ draggedCard: sender })

  }

  handleTitleChange(event) {

    const newTitle = event.target.value;
    const activeSlide = event.target.name;
    const slideInformation = this.state.slideInformation;

    const foundItem = slideInformation.find((element) => element.id === activeSlide);
    foundItem.title = newTitle;
    this.setState({ foundItem })

  }

  handleSubtitleChange(event) {

    const newsubtitle = event.target.value;
    const activeSlide = event.target.name;
    const slideInformation = this.state.slideInformation;

    const foundItem = slideInformation.find((element) => element.id === activeSlide);
    foundItem.subtitle = newsubtitle;
    this.setState({ foundItem })

  }

  handleTextChange(event) {
    const newText= event.target.value;
    const activeSlide = event.target.name;
    const slideInformation = this.state.slideInformation;
    if (newText.length > 550) {
        alert("No se permiten textos de más de 550 espacios");
        return;
    }
    const foundItem = slideInformation.find((element) => element.id === activeSlide);
    foundItem.text = newText;
    this.setState({ foundItem })
}

handleImgChange(event) {

  let newImage = undefined;
  const activeSlide = event.target.name;
  const slideInformation = this.state.slideInformation;

  window.cloudinary.openUploadWidget({
      cloud_name: 'lebijoubcn',
      upload_preset: 'kreznlvo',
      tags: ['web'],
  },
      (error, result) => {
          if (error) {
              console.log(error);
          } else {
              if (result.info.secure_url !== undefined) {
                  newImage = result.info.secure_url;
                  const foundItem = slideInformation.find((element) => element.id === activeSlide);
                  foundItem.image = newImage;
                  this.setState({ foundItem })

              }
          }
      })

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

              {this.state.slideInformation.map((slide, index) => {

                return (
                  <CardFormBody
                    setOnDrag={this.setOnDrag}
                    key={index}
                    onDrop={this.onDrop}
                    slide={slide}
                    onDragOver={this.onDragOver}
                    setFormData={this.setFormData}
                    handleTitleChange={this.handleTitleChange}
                    handleImgChange = {this.handleImgChange}
                    handleSubtitleChange = {this.handleSubtitleChange}
                    handleTextChange = {this.handleTextChange}

                  />
                )
              })}
            </div>
            <div>
              <button onClick={this.logout}> Salir</button>
              <p>NOTA: las imagenes deben ser de un formato 1200x800 o proporcional para su óptima visualización en la página.</p>
              <button type="submit">Salvar Cambios</button>
            </div>
          </form>
        </div>
      )

    }
  }
}