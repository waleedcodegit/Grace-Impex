import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'
class AboutUs extends Component {
    render() {
        return (
           <div class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/* -- /.preloader -*/}

    {/* -- =========================
        Header
    =========================== -*/}
    {/* -- /.Header -*/}
    <Nav/>
    {/* -- ========================
       page title 
    =========================== -*/}
    <section class="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
      <div class="bg-img"><img src="assets/images/page-titles/1.jpg" alt="background"/></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <span class="pagetitle__subheading">we are manufacturing P.E.T. Bottles & Containers,</span>
            <h1 class="pagetitle__heading">Wide Range of Caps for P.E.T. Bottles & Other type of bottles</h1>
            <a href="projects-grid.html" class="btn btn__white btn__bordered btn__icon">
              <span>Latest Projects</span><i class="icon-arrow-right"></i>
            </a>
          </div>{/* -- /.col-xl-6 -*/}
        </div>{/* -- /.row -*/}
      </div>{/* -- /.container -*/}
    </section>{/* -- /.page-title -*/}

    {/* -- ========================
      About Layout 2
    =========================== -*/}
    <section class="about-layout2">
      <div class="container-fluid">
        <div class="row">
          <div class="text-block">
            <div class="heading-layout2 mb-30">
              <span class="heading__subtitle">we are manufacturing P.E.T. Bottles & Containers,</span>
              <h2 class="heading__title">Wide Range of Caps for P.E.T. Bottles & Other type of bottles</h2>
              <p class="heading__desc mb-30 mt-40">Perhaps the most important of the plastic materials that may be oriented to improve physical properties is "PET", the abbreviation for Polyethylene Terephthalate. The familiar PET carbonated soft drink bottle, which has become an indispensable part of our lives, is made by the stretch blow molding process.</p>
              <p class="heading__desc">The superb properties of PET make it ideal for packaging a whole host of products ranging from beverages and food products to pharmaceuticals and cosmetics.</p>
            </div>{/* -- /heading -*/}
            <ul class="list-items list-unstyled mb-40">
              <li>Quality Control System</li>
              <li>Crystal Clear Pure</li>
              <li>100% Satisfaction Guarantee</li>
              <li>Good Barrier</li>
              <li>Highly Professional Staff</li>
              <li>Design Flexibility</li>
            </ul>
            <a href="projects-grid.html" class="btn btn__secondary btn__icon">
              <span>Latest Projects</span><i class="icon-arrow-right"></i>
            </a>
          </div>{/* -- /.col-xl-7 -*/}
          <div class="imgs-block mt-50">
            <div class="about__img">
              <img src="assets/images/about/2.png" alt="about" class="img-fluid w-100"/>
            </div>{/* -- /.about-img -*/}
            <div class="video__box">
              <a class="video__btn video__btn-white" href="https://www.youtube.com/channel/UC_6_YxiiERO5SwDTDVFxqVA" target='blank'>
                <div class="video__player">
                  <span class="video__player-animation"></span>
                  <span class="video__player-animation video__player-animation-2"></span>
                  <i class="fa fa-play"></i>
                </div>
              </a>
            </div>{/* -- /.video__box -*/}
          </div>{/* -- /.col-xl-5 -*/}
        </div>{/* -- /.row -*/}
      </div>{/* -- /.container -*/}
    </section>{/* -- /.About Layout 2 -*/}

    {/* -- =========================
       Banner layout 1
      =========================== -*/}
    <section class="banner-layout1 p-0">
      <div class="container-fluid col-padding-0 bg-theme">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 background-banner">
            <div class="bg-img"><img src="assets/images/banners/1.jpg" alt="background"/></div>
            {/* -- /.cta__banner -*/}
          </div>{/* -- /.col-lg-6 -*/}
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="inner-padding">
              <div class="heading-layout2 heading-light mb-40">
                <h2 class="heading__title">Wide Range of Caps for P.E.T. Bottles</h2>
                <p class="heading__desc">M/S GRACE IMPEX was established over a decade ago with an main aim of producing P.E.T. Bottles to be used for packaging purposes. </p>
              </div>{/* -- /.heading -*/}
              <div class="row fancybox-light">
                {/* -- fancybox item #1 -*/}
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="fancybox-item">
                    <div class="fancybox__icon">
                      <i class="icon-arrow-right"></i>
                    </div>{/* -- /.fancybox-icon -*/}
                    <div class="fancybox__content">
                      <h4 class="fancybox__title">Good Barrier</h4>
                      <p class="fancybox__desc">The low permeability of PET to oxygen, carbon dioxide and water means that it protects and maintains the integrity of products giving a good shelf life.</p>
                    </div>{/* -- /.fancybox-content -*/}
                  </div>{/* -- /.fancybox-item -*/}
                </div>{/* -- /.col-lg-6 -*/}
                {/* -- fancybox item #2 -*/}
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="fancybox-item">
                    <div class="fancybox__icon">
                      <i class="icon-checklist"></i>
                    </div>
                    <div class="fancybox__content">
                      <h4 class="fancybox__title">Recyclable</h4>
                      <p class="fancybox__desc">PET is made from the same three elements (carbon, oxygen, and hydrogen) as paper, and contains no toxic substances. </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="request-quote.html" class="btn btn__white btn__bordered btn__icon box-shadow-none">
                <span>Request A Quote</span><i class="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    
    <section class="clients border-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="slick-carousel"
              data-slick='{"slidesToShow": 6, "arrows": false, "dots": false, "autoplay": true,"autoplaySpeed": 2000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 4}}, {"breakpoint": 767, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}'>
              <div class="client">
                <a href="#"><img src="assets/images/clients/1.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/2.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/3.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/4.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/5.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/6.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/3.png" alt="client"/></a>
              </div>
              <div class="client">
                <a href="#"><img src="assets/images/clients/4.png" alt="client"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div>

    </div>

    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
<Footer/>
  </div>
        );
    }
}

export default AboutUs;