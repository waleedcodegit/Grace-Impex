import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-slider-responsive'

class Slider extends Component {
    render() {
        return (
            <div>
 {/* <Carousel 
            autoPlay = {true}
            showArrows={true}
            infiniteLoop={true}
            interval={300000}
            // stopOnHover={true}
            // showThumbs={true}
            // showStatus={true}
            // showIndicators={true}
            >
            <div>
            <img src="/images/s1.jpg" alt="slide img"/>

            </div>
           <img src="/images/s2.jpg" alt="slide img"/>
           <img src="/images/s3.jpg" alt="slide img"/>
           <img src="/images/s4.jpg" alt="slide img"/>
           <img src="/images/s5.jpg" alt="slide img"/>
           
        </Carousel> */}

        <Carousel autoplay >
        <div>
            <img src="/images/s1.jpg" alt="slide img"/>

            </div>
            <div>
            <img src="/images/s2.jpg" alt="slide img"/>
            </div>
            <div>
            <img src="/images/s3.jpg" alt="slide img"/>
            </div>
            <div>
            <img src="/images/s4.jpg" alt="slide img"/>
            </div>
            <div>
            <img src="/images/s5.jpg" alt="slide img"/>
            </div>
        </Carousel>
            </div>
           
        );
    }
}

export default Slider;