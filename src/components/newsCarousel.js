import { CarouselProvider, Slider, Slide,DotGroup } from 'pure-react-carousel';
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class newsCarousel extends React.Component {


    render() {
        return (
            
            <CarouselProvider
                dragEnabled={false}
                naturalSlideWidth={1}
                naturalSlideHeight={2}
                totalSlides={3}
            >
                <Slider>
                    <Slide  className="slide01" index={0}>I am the first Slide.</Slide>
                    <Slide className="slide02" index={1}>I am the second Slide.</Slide>
                    <Slide className="slide03" index={2}>I am the third Slide.</Slide>       
                </Slider>
                <DotGroup className="carouselDots"/>
            </CarouselProvider>
            
        )
    }

}