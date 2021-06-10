import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'
import Axios from 'axios'
import Swal from 'sweetalert2'
class Enquiry extends Component {
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
            <div class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/* -- /.preloader */}

    {/* -- =========================
        Header
    =========================== */}
    <Nav/>
   {/* -- /.Header */}

    {/* -- ========================
       page title 
    =========================== */}
    <section class="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
      <div class="bg-img"><img src="assets/images/page-titles/11.jpg" alt="background"/></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <span class="pagetitle__subheading">Quality & Commitment &amp; at it’s Excellence</span>
            <h1 class="pagetitle__heading">products ranging from beverages and food products to pharmaceuticals and cosmetics</h1>
            <a href="#" class="btn btn__white btn__bordered btn__icon">
              <span>Our Products</span><i class="icon-arrow-right"></i>
            </a>
          </div>{/* -- /.col-xl-6 */}
        </div>{/* -- /.row */}
      </div>{/* -- /.container */}
    </section>{/* -- /.page-title */}


      {/* -- ==========================
          contact layout 2
      =========================== */}
      <section class="contact-layout2 p-10">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="contact-panel mt--140">
                {/* -- /.contact__panel-info */}
                <form method="post" action="assets/php/contact.php" id="contactForm" class="contact__panel-form">
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="contact__panel-title">Enquiry Form</h4>
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
              </div>{/* -- /.contact__panel */}
            </div>{/* -- /.col-lg-12 */}
          </div>{/* -- /.row */}
        </div>{/* -- /.container */}
      </section>{/* -- /.contact layout 2 */}

 <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
<Footer/>
  </div>
   
   
        );
    }
}

export default Enquiry;