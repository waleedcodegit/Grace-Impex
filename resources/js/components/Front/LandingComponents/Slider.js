import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
         <section class="slider slider-layout2">
      <div class="slick-carousel carousel-arrows-light m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
        {/* <div class="slide-item align-v-h bg-overlay bg-overlay-2">
          <div class="bg-img"><img src="assets/images/sliders/1.jpg" alt="slide img"/></div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="slide__content">
                  <h2 class="slide__title">Quality & Commitment<br/> at it’s Excellence</h2>
                  <p class="slide__desc">products ranging from beverages and food products<br/> to pharmaceuticals and cosmetics</p>
                  <div style={{width:'100%', textAlign:'center'}}><a href="/products" class="btn btn__white btn__icon btn__lg mr-30">
                    <span>Our Products</span><i class="icon-arrow-right"></i>
                  </a>
                  <a class="video__btn popup-video" href="https://www.youtube.com/watch?v=r3Hqj6JpwJQ">
                    <div class="video__player">
                      <span class="video__player-animation"></span>
                      <span class="video__player-animation video__player-animation-2"></span>
                      <i class="fa fa-play"></i>
                    </div>
                    <span class="video__btn-title ml-20">Play Video</span>
                  </a></div>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}
        <div class="slide-item align-v-h bg-overlay bg-overlay-2">
          <div class="bg-img"><img src="/images/s1.jpg" alt="slide img"/></div>
          {/* <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="slide__content">
                  <h2 class="slide__title">Quality & Commitment<br/> at it’s Excellence</h2>
                  <p class="slide__desc">products ranging from beverages and food products<br/> to pharmaceuticals and cosmetics</p>
                  <div style={{width:'100%', textAlign:'center'}}><a href="/products" class="btn btn__white btn__icon btn__lg mr-30">
                    <span>Our Product</span><i class="icon-arrow-right"></i>
                  </a>
                  <a class="video__btn popup-video" href="https://www.youtube.com/watch?v=r3Hqj6JpwJQ">
                    <div class="video__player">
                      <span class="video__player-animation"></span>
                      <span class="video__player-animation video__player-animation-2"></span>
                      <i class="fa fa-play"></i>
                    </div>
                    <span class="video__btn-title ml-20">Play Video</span>
                  </a></div>
                </div>
              </div>
             
            </div>
          </div> */}
        </div>
      </div>
    </section>
    );
  }
}
