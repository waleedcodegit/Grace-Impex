import React, { Component } from 'react';
import Nav from '../NavBar';
import Footer from '../LandingComponents/Footer';
class Clients extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/*-- /.preloader -*/}

    {/*-- =========================
        Header
    =========================== -*/}
    <Nav/>{/*-- /.Header -*/}

    {/*-- ========================
       page title 
    =========================== -*/}
    <section class="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
      <div class="bg-img"><img src="assets/images/page-titles/2.jpg" alt="background"/></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <span class="pagetitle__subheading">Grace Impex</span>
            <h1 class="pagetitle__heading">List Of Customers</h1>
          </div>{/*-- /.col-xl-6 -*/}
        </div>{/*-- /.row -*/}
      </div>{/*-- /.container -*/}
    </section>{/*-- /.page-title -*/}

    {/*-- ========================
      About Layout 2
    =========================== -*/}
    <section class="about-layout2">
      <div class="container-fluid">
        <div class="row">
          <div class="text-block">
            <div class="heading-layout2 mb-30">
              <h2 class="heading__title">Our Clients</h2>
            </div>{/*-- /heading -*/}
            <ul class="list-items list-unstyled mb-40">
              <li>M.S. Mineral Water(Cool Mineral Water)</li>
              <li>Sabeel Mineral Water</li>
              <li>Javed Food Industries (Mineral Water)</li>
              <li>Nice Mineral Water</li>
              <li>Niagra Mineral Water</li>
              <li>Neutral Mineral Water</li>
              <li>New Everest Mineral Water</li>
              <li>Aab-e-Hayat Mineral Water</li>
              <li>Behrain Mineral Water</li>
              <li>Javed Plastic (Trader)</li>
              <li>Shafique Plastic(Trader)</li>
              <li>Chaudry Essence House(Trader)</li>
              <li>Lahore Plastic Centre (Trader)</li>
              <li>Mohsin Brothers Food Products</li>
              <li>Natural Food Products</li>
              <li>Fahad Food Products</li>
              <li>Marhaba Dawakhana</li>
              <li>Flogo Advertisers</li>
              <li>Pes-Tech</li>
              <li>I.B.L</li>
              <li>Farmers Equity (Pvt.) Limited</li>
              <li>4-B Bio Logic AG Pakistan </li>
              <li>4-B Agri Services</li>
              <li>4-B Chemicals (Pvt.) Limited.</li>
              <li>Gul Yusuf (Pvt.) Limited</li>
              <li>Economy Pesticides (Pvt) Limited</li>
              <li>Crop Care (Pvt.) Limited</li>
              <li>Sharp Agro (Pvt) Limited</li>
              <li>Prizm Agro (Pvt) Limited</li>
              <li>Lasani Agro (Pvt) Limited</li>
              <li>Sunshine Agro (Pvt) Limited</li>
              <li>Zephyr Agro (Pvt) Limited</li>
            </ul>
          </div>{/*-- /.col-xl-7 -*/}
          <div class="imgs-block mt-50">
            <div class="about__img">
              <img src="/images/clients-pic.png" alt="clients" class="img-fluid w-100"/>
            </div>{/*-- /.about-img -*/}
            {/*-- /.video__box -*/}
          </div>{/*-- /.col-xl-5 -*/}
        </div>{/*-- /.row -*/}
      </div>{/*-- /.container -*/}
    </section>{/*-- /.About Layout 2 -*/}
    <div>
    </div>

    {/*-- ========================
      Footer
    ========================== -*/}
    <Footer/>
    {/*-- /.Footer -*/}
    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>

  </div>

            </div>
        );
    }
}

export default Clients;