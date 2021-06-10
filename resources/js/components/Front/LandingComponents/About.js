import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section class="about-layout2">
      <div class="container-fluid">
        <div class="row">
          <div class="text-block">
            <div class="heading-layout2 mb-30">
              <span class="heading__subtitle">we are manufacturing P.E.T. Bottles & Containers,</span>
              <h2 class="heading__title">Wide Range of Caps for P.E.T. Bottles &amp; Other type of bottles</h2>
              <p class="heading__desc mb-30 mt-40">Perhaps the most important of the plastic materials that may be oriented to improve physical properties is "PET", the abbreviation for Polyethylene Terephthalate. The familiar PET carbonated soft drink bottle, which has become an indispensable part of our lives, is made by the stretch blow molding process.</p>
              <p class="heading__desc">The superb properties of PET make it ideal for packaging a whole host of products ranging from beverages and food products to pharmaceuticals and cosmetics.</p>
            </div>
            <ul class="list-items list-unstyled mb-40">
              <li>Quality Control System</li>
              <li>Crystal Clear Pure</li>
              <li>100% Satisfaction Guarantee</li>
              <li>Good Barrier</li>
              <li>Highly Professional Staff</li>
              <li>Design Flexibility</li>
            </ul>
            <a href="/Aboutus" class="btn btn__secondary btn__icon">
              <span>About Grace Impex</span><i class="icon-arrow-right"></i>
            </a>
          </div>
          <div class="imgs-block mt-50">
            <div class="about__img">
              <img src="assets/images/about/2.png" alt="about" class="img-fluid w-100"/>            
            </div>
            <div class="video__box">
              <a class="video__btn video__btn-white popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                <div class="video__player">
                  <span class="video__player-animation"></span>
                  <span class="video__player-animation video__player-animation-2"></span>
                  <i class="fa fa-play"></i>                </div>
              </a>            </div>
          </div>
          
        </div>
      </div>
    </section>
    );
  }
}
