import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';


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

            <CarouselProvider
                dragEnabled={false}
                naturalSlideWidth={1}
                naturalSlideHeight={2}
                totalSlides={3}
            >
                <Slider>
                    {this.state.slideInformation.map((slide, index) => {
                        return (
                            <Slide className={slide.id} key={slide.id} index={index}>
                                <div className="newsWrapper">
                                    <div className="newsImageWrapper">
                                        <img alt="news"src={slide.image}></img>
                                    </div>
                                    <div className="newsContentWrapper">
                                        <h1>{slide.title}</h1>
                                        <h2>{slide.subtitle}</h2>
                                        <p>{slide.text}</p>
                                    </div>
                                </div>
                            </Slide>)
                    })}
                </Slider>
                <DotGroup className="carouselDots" />
            </CarouselProvider>

        )
    }

}