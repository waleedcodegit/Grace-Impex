import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header class="header header-light header-layout2">
      <div class="header__topbar d-none d-xl-block">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-5 col-lg-3">
              <ul class="header__topbar-links d-flex flex-wrap list-unstyled mb-0">
                {/* <li><a href="#">New & Media</a></li> */}
                <li><a href="/Contactus">Contact Us</a></li>
                {/* <li><a href="careers.html">Careers</a></li> */}
              </ul>
            </div>{ /* /.col-lg-5 */}
            <div class="col-sm-12 col-md-7 col-lg-9 header__topbar-right">
              <div class="header__topbar-right-inner d-flex flex-wrap justify-content-between">
                <ul class="social__icons list-unstyled mb-0">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                </ul>
                <ul class="contact__list list-unstyled mb-0 d-flex flex-wrap">
                  <li>
                    <i class="icon-phone"></i><span>Phone:</span>
                    <a href="tel:+92 321 8581212">+92 321 8581212</a>
                  </li>
                  <li>
                    <i class="icon-envelope"></i><span>Email:</span>
                    <a href="mailto:enquiry@grace-impex.com"> enquiry@grace-impex.com</a>
                  </li>
                </ul>
              </div>
            </div>{ /* /.col-lg-7 */}
          </div>{ /* /.row */}
        </div>{ /* /.container */}
      </div>{ /* /.header__topbar */}
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="assets/images/logo/logo-light.png" class="logo-light" alt="logo"/>
            <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="logo"/>          </a>
          <button class="navbar-toggler" type="button">
            <span class="menu-lines"><span></span></span>          </button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav__item with-dropdown">
                <a href="/" class="dropdown-toggle nav__item-link active">Home</a></li>{ /* /.nav-item */}
              <li class="nav__item with-dropdown">
                <a href="/Aboutus" class="dropdown-toggle nav__item-link">About</a></li>{ /* /.nav-item */}
              <li class="nav__item with-dropdown">
                <a href="process" class="dropdown-toggle nav__item-link">Process</a></li>{ /* /.nav-item */}
                <li class="nav__item with-dropdown">
                <a href="products" class="dropdown-toggle nav__item-link">Products</a></li>{ /* /.nav-item */}
              <li class="nav__item with-dropdown">
                <a href="Clients" class="dropdown-toggle nav__item-link">Clients</a></li>{ /* /.nav-item */}
              <li class="nav__item with-dropdown">
                <a href="/blogs" class="dropdown-toggle nav__item-link">E-Catalogue</a></li>{ /* /.nav-item */}
              {/* <li class="nav__item">
                <a href="/enquiry" class="nav__item-link">Enquiry</a>              </li> */}
                
                { /* /.nav-item */}
              <li class="nav__item">
                <a href="/exhibits" class="nav__item-link">Exhibits</a>              </li>{ /* /.nav-item */}
            </ul>{ /* /.navbar-nav */}
          </div>{ /* /.navbar-collapse */}
          <ul class="actions__list list-unstyled d-flex align-items-center mb-0 ml-30">
            
            <li><button type="button" class="search-popup-trigger"><i class="fa fa-search"></i></button></li>
          </ul>{ /* /.actions__list */}
        </div>
        { /* /.container */}
      </nav>{ /* /.navabr */}
    </header>
    );
  }
}

export default NavBar;