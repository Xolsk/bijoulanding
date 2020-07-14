import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class newsCarousel extends React.Component {

    state = {
        slideInformation: [
            { title: "default", subtitle: "default", text: "default", image: "default" },
            { title: "default", subtitle: "default", text: "default", image: "default" },
            { title: "default", subtitle: "default", text: "default", image: "default" }
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

            <CarouselProvider
                dragEnabled={false}
                naturalSlideWidth={1}
                naturalSlideHeight={2}
                totalSlides={3}
            >
                <Slider>
                    <Slide className="slide01" index={0}>
                        <h1>{this.state.slideInformation[0].title}</h1>
                        <h2>hola</h2>


                    </Slide>
                    <Slide className="slide02" index={1}>I am the second Slide.</Slide>
                    <Slide slide={this.state.slideInformation[2]} className="slide03" index={2}>I am the third Slide.</Slide>
                </Slider>
                <DotGroup className="carouselDots" />
            </CarouselProvider>

        )
    }

}