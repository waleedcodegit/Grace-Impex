import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
       <header class="header header-transparent header-layout1">
      <nav class="navbar navbar-expand-lg sticky-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="/assets/images/logo/logo-light.png" class="logo-light" alt="logo"/>
            <img src="/assets/images/logo/logo-dark.png" class="logo-dark" alt="logo"/>
          </a>
          <button class="navbar-toggler" type="button">
            <span class="menu-lines"><span></span></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav__item with-dropdown">
                <a href="/" class="dropdown-toggle nav__item-link ">Home</a></li>{/* -- /.nav-item -*/}
              <li class="nav__item with-dropdown">
                <a href="/Aboutus" class="dropdown-toggle nav__item-link active">About</a></li>{/* -- /.nav-item -*/}
              <li class="nav__item with-dropdown">
                <a href="process" class="dropdown-toggle nav__item-link">Process</a></li>{/* -- /.nav-item -*/}
                <li class="nav__item with-dropdown">
                <a href="products" class="dropdown-toggle nav__item-link">Products</a></li>{/* -- /.nav-item -*/}
              <li class="nav__item with-dropdown">
                <a href="Clients" class="dropdown-toggle nav__item-link">Clients</a></li>{/* -- /.nav-item -*/}
              <li class="nav__item with-dropdown">
                <a href="/ecatalogue" class="dropdown-toggle nav__item-link">E-Catalogue</a></li>{/* -- /.nav-item -*/}
              {/* <li class="nav__item">
                <a href="/enquiry" class="nav__item-link">Enquiry</a>
              </li> */}
              {/* -- /.nav-item -*/}
              <li class="nav__item">
                <a href="/Contactus" class="nav__item-link">Contact</a>
              </li>{/* -- /.nav-item -*/}
            </ul>{/* -- /.navbar-nav -*/}
          </div>{/* -- /.navbar-collapse -*/}
          <ul class="actions__list list-unstyled d-flex align-items-center mb-0 ml-30">
            
            <li><button type="button" class="search-popup-trigger"><i class="fa fa-search"></i></button></li>
          </ul>{/* -- /.actions__list -*/}
        </div>{/* -- /.container -*/}
      </nav>{/* -- /.navabr -*/}
    </header>
    );
  }
}

export default NavBar;