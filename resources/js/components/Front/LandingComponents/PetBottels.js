import React, { Component } from 'react';
import NavBar2 from '../NavBar2';
import Footer from './Footer';
 
class PetBottels extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
        <>
        <header class="header header-light header-layout1">
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="assets/images/logo/logo-light.png" class="logo-light" alt="logo"/>
            <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="logo"/>
          </a>
          <button class="navbar-toggler" type="button">
            <span class="menu-lines"><span></span></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav__item with-dropdown">
                <a href="/" class="dropdown-toggle nav__item-link ">Home</a></li>
              <li class="nav__item with-dropdown">
                <a href="/Aboutus" class="dropdown-toggle nav__item-link">About</a></li>
              <li class="nav__item with-dropdown">
                <a href="process" class="dropdown-toggle nav__item-link">Process</a></li>
                <li class="nav__item with-dropdown">
                <a href="/products" class="dropdown-toggle nav__item-link">Products</a></li>
              <li class="nav__item with-dropdown">
                <a href="Clients" class="dropdown-toggle nav__item-link">Clients</a></li>
              <li class="nav__item with-dropdown">
                <a href="/ecatalogue" class="dropdown-toggle nav__item-link">E-Catalogue</a></li>
              {/* <li class="nav__item">
                <a href="/enquiry" class="nav__item-link">Enquiry</a>
              </li> */}
              <li class="nav__item">
                <a href="/Contactus" class="nav__item-link active">Contact</a>
              </li>
            </ul>
          </div>
          <ul class="actions__list list-unstyled d-flex align-items-center mb-0 ml-30">
            
            <li><button type="button" class="search-popup-trigger"><i class="fa fa-search"></i></button></li>
          </ul>
        </div>
      </nav>
    </header>
        {/* <NavBar2></NavBar2> */}
        <section className="about-layout2">
        <div className="container col-padding-0">
            <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/agro-chemical">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-agro-chemical.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Agro Chemical</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/cosmetic-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-cosmetic-bottles.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Cosmetic Bottles</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/fmcg-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-fmcg-products.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>FMCG Products</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/food-packaging">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-food-packaging.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Food Packaging</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/fridge-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-fridge-bottles.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Fridge Bottles</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/househols-packaging">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-household-packaging.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Household Packaging</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/pharmaceutical">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-pharmaceutical.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Pharmaceutical</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/shower-spray-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-shower-spray-bottles.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Shower Spray Bottles</h1>
                </div>
                </a>
            </div>
           
            </div>
        </div>
        </section>
        <Footer></Footer>
        </>
        );
    }
}
 
export default PetBottels;