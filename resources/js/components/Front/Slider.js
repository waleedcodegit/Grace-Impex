import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Slider extends Component {
    render() {
        return (
            <Carousel 
            autoPlay = {true}
            showArrows={true}
            infiniteLoop={true}
            interval={3000}
            // stopOnHover={true}
            // showThumbs={true}
            // showStatus={true}
            // showIndicators={true}
            >
            <div>
                <img src="/images/S1.png" />
            </div>
            <div>
                <img src="/images/S2.png" />
            </div>
            <div
            >
                <img src="/images/S3.png" />
                 {/* <p
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                top: '100px',
                color: "white",
                transform: " translateX(-50%)"
              }}
            >Slider Text</p> */}
            </div>
            <div>
                <img src="/images/S4.png" />
            </div>
        </Carousel>
        );
    }
}

export default Slider;