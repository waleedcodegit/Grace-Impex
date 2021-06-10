import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'
import Axios from 'axios'
import Swal from 'sweetalert2'
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:'',
            msg:''
        }
    }
    name(e){
        this.setState({
            name:e.target.value
        })
    }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    phone(e){
        this.setState({
            phone:e.target.value
        })
    }
    msg(e){
        this.setState({
            msg:e.target.value
        })
    }
    submit_request(){
        let senderdata = {
            name:this.state.name,
            email:this.state.email,
            msg:this.state.msg,
            phone:this.state.phone
        }

        Axios.post('/api/contact_us',senderdata).then(res=>{
            if(res.data.status == 200){
                Swal.fire({
                icon: 'success',
                title: res.data.msg,
                showConfirmButton: false,
                timer: 1500
                })
            }else{
                Swal.fire({
                icon: 'error',
                title: res.data.msg,
                showConfirmButton: false,
                timer: 1500
                })
            }
        })
    }
    render() {
        return (
            <div id="contactus" class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/*-- /.preloader -*/}

    {/*-- =========================
        Header
    =========================== -*/}
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
                <a href="/blogs" class="dropdown-toggle nav__item-link">News &amp; Media</a></li>
              <li class="nav__item">
                <a href="/enquiry" class="nav__item-link">Enquiry</a>
              </li>
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
    </header>{/*-- /.Header -*/}

    {/*-- ========================= 
            Google Map
    =========================  -*/}
    <section class="google-map p-0">
      <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.120825976834!2d74.319135!3d31.433952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3927431b2a8513a0!2sGRACE%20IMPEX%20(SMC-PVT)%20LIMITED!5e0!3m2!1sen!2s!4v1623229689582!5m2!1sen!2s" width="100%" height="500px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
    </section>{/*-- /.GoogleMap -*/}

    {/*-- ==========================
        contact layout 1
    =========================== -*/}
    <section class="contact-layout1 pt-0 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="contact-panel">
              <div class="contact__panel-info">
                <div class="contact__panel-info-top">
                  <div class="contact-info-box">
                    <h4 class="contact__info-box-title">Our Location</h4>
                    <ul class="contact__info-list list-unstyled">
                      <li>123/1-A, Quaid-e-Azam Industrial Estate Quaid e Azam Industrial Estate, Lahore, Punjab 54770</li>
                    </ul>{/*-- /.contact__info-list -*/}
                  </div>{/*-- /.contact-info-box -*/}
                  <div class="contact-info-box">
                    <h4 class="contact__info-box-title">Quick Contact</h4>
                    <ul class="contact__info-list list-unstyled">
                      <li>Email: <a href="mailto:enquiry@grace-impex.com"> enquiry@grace-impex.com</a></li>
                    </ul>{/*-- /.contact__info-list -*/}
                  </div>{/*-- /.contact-info-box -*/}
                </div>{/*-- /.contact__panel-info-top -*/}
                <div class="contact__panel-info-bottom">
                  <strong class="contact__panel-info-title">We will get back to you within 24 hours, or call us
                    everyday, 09:00 AM - 06:00 PM</strong>
                  <div class="contact__number d-flex align-items-center">
                    <i class="icon-phone"></i>
                    <a style={{fontSize:'18px'}} href="tel:++92 321 8581212">++92 321 8581212 <br/> ++92 321 8581414</a> 
                    {/* <a href="tel:++92 321 8581414">++92 321 8581414</a> */}
                  </div>
                </div>{/*-- /.contact__panel-info-bottom -*/}
              </div>{/*-- /.contact__panel-info -*/}
              <form method="post" action="assets/php/contact.php" id="contactForm" class="contact__panel-form">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="contact__panel-title">Get In Touch</h4>
                    <p class="contact__panel-desc mb-40">Complete control over products allows us to ensure our customers receive the best quality prices and service. We take great pride in everything that we do in our factory.</p>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input type="text" onChange={this.name.bind(this)} class="form-control" placeholder="Name" id="contact-name" name="contact-name"
                        required/>
                    </div>
                  </div>{/*-- /.col-lg-6 -*/}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input type="email" onChange={this.email.bind(this)} class="form-control" placeholder="Email" id="contact-email"
                        name="contact-email" required/>
                    </div>
                  </div>{/*-- /.col-lg-6 -*/}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input type="text" class="form-control" onChange={this.phone.bind(this)} placeholder="Phone" id="contact-Phone"
                        name="contact-phone" required/>
                    </div>
                  </div>{/*-- /.col-lg-6 -*/}
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input type="text" class="form-control"  placeholder="Website" id="contact-subject"
                        name="contact-subject" required />
                    </div>
                  </div>{/*-- /.col-lg-6 -*/}
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                     	<textarea onChange={this.msg.bind(this)} class="form-control" placeholder="Additional Details!" placeholder="Message"
                        id="contact-messgae" name="contact-messgae" required></textarea>
                    </div>
                  </div>{/*-- /.col-lg-12 -*/}
                   <div class="col-sm-12 col-md-12 col-lg-12">
                    <button onClick={this.submit_request.bind(this)} class="btn btn__primary btn__block  btn__lg">
                      <span class="mx-2">Submit Request</span><i class="icon-arrow-right mx-2"></i>
                    </button>
                    <div class="contact-result"></div>
                  </div>{/*-- /.col-lg-12 -*/}
                </div>{/*-- /.row -*/}
              </form>
             
            </div>{/*-- /.contact__panel -*/}
          </div>{/*-- /.col-lg-12 -*/}
        </div>{/*-- /.row -*/}
      </div>{/*-- /.container -*/}
    </section>{/*-- /.contact layout 1 -*/}


    
    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
<Footer/>
  </div>

        );
    }
}

export default ContactUs;