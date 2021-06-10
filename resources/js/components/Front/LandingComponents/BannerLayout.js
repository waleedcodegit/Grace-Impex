import React, { Component } from "react";
export default class BannerLayout extends Component {
  render() {
    return (
     <section class="banner-layout3 bg-overlay bg-parallax mt--130">
      <div class="bg-img"><img src="assets/images/banners/4.jpg" alt="background"/></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="heading-layout2 heading-light mb-50">
              <span class="heading__subtitle">Our strategic intent is to create value for our customers</span>
              <h2 class="heading__title">And To Bring Competitive Advantage To Their Activities. </h2>
            </div>
          </div>
        </div>
        <div class="row counter-light">
         
          <div class="col-6 col-sm-3">
            <div class="counter-item">
              <h4 class="counter">6,154</h4>
              <p class="counter__desc">Completed Projects in 2020</p>
            </div>
          </div>
         
          <div class="col-6 col-sm-3">
            <div class="counter-item">
              <h4 class="counter">2,512</h4>
              <p class="counter__desc">Qualified Employees And Workers With Us</p>
            </div>
          </div>
         
          <div class="col-6 col-sm-3">
            <div class="counter-item">
              <h4 class="counter">1,784</h4>
              <p class="counter__desc">Satisfied Clients We Have Served Globally</p>
            </div>
          </div>
          <div class="col-6 col-sm-3">
            <div class="counter-item">
              <h4 class="counter">0,26</h4>
              <p class="counter__desc">Years Of Experience In The Manufacturing Industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
