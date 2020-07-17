import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



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

        const { slideInformation } = this.state
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 1
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return (

            <Carousel responsive={responsive}>

                {slideInformation.map((slide) => {

                    return(

                    <div className={slide.id} style={{ height: "70vh" }}>
                        {slide.title}
                        </div>
                    )
                })}


            </Carousel>
        )
    }

}