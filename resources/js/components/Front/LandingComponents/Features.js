import React, { Component } from "react";
export default class Features extends Component {
  render() {
    return (
       <section class="features-layout1 bg-gray pb-0">
      <div class="fetures-bg">
        <div class="bg-img"><img src="assets/images/backgrounds/map.png" alt="background"/></div>
      </div>
      <div class="container col-padding-0">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <span class="heading__subtitle">A groomed upright position with distinction among the</span>
              <h2 class="heading__title">leading P.E.T. Bottles Manufacturers in the Industry</h2>
            </div>
          </div>
        </div>
        <div class="row features-wrapper">
         
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="feature-item">
              <div class="feature__img">
                <img src="assets/images/features/1.jpg" alt="portfolio img"/>
              </div>
              <div class="feature__content">
                <h4 class="feature__title">P.E.T. <br/> Bottles</h4>
                <p class="feature__desc">The familiar PET carbonated soft drink bottle, which has become an indispensable part of our lives, is made by the stretch blow molding process.</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Bottles</li>
                  <li>Containers</li>
                  <li>Caps</li>
                </ul>
                <a href="services-single-service.html" class="btn btn__secondary"><span>Read More</span><i
                    class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="feature-item">
              <div class="feature__img">
                <img src="assets/images/features/2.jpg" alt="portfolio img"/>
              </div>
              <div class="feature__content">
                <h4 class="feature__title">How PET Bottles <br/> Are Made</h4>
                <p class="feature__desc">The superb properties of PET make it ideal for packaging a whole host of products ranging from beverages and food products to pharmaceuticals and cosmetics.</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Drying the PET</li>
                  <li>Plasticizing the PET</li>
                  <li>Injection molding the perform</li>
                </ul>
                <a href="services-single-service.html" class="btn btn__secondary"><span>Read More</span><i
                    class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="feature-item">
              <div class="feature__img">
                <img src="assets/images/features/3.jpg" alt="portfolio img"/>
              </div>
              <div class="feature__content">
                <h4 class="feature__title">ISO <br/> Certification</h4>
                <p class="feature__desc">The superb properties of PET make it ideal for packaging a whole host of products ranging from beverages and food products to pharmaceuticals and cosmetics.</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Drying the PET</li>
                  <li>Plasticizing the PET</li>
                  <li>Injection molding the perform</li>
                </ul>
                <a href="services-single-service.html" class="btn btn__secondary"><span>Read More</span><i
                    class="icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
