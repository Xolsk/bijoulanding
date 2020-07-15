import React from 'react';
const Carousel = require('react-responsive-carousel').Carousel;



export default class newsCarousel extends React.Component {

    state = {
        slideInformation: [
            { id: "default01", title: "default", subtitle: "default", text: "default", image: "default" },
            { id: "default02", title: "default", subtitle: "default", text: "default", image: "default" },
            { id: "default03", title: "default", subtitle: "default", text: "default", image: "default" }
        ]
    };

    componentDidMount() {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:4000/news/read", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({ slideInformation: result }))
            .catch(error => console.log('error', error));

    }

    render() {

        return (

            <Carousel showArrows={true}>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="assets/4.jpeg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="assets/5.jpeg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="assets/6.jpeg" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>

        )
    }

}