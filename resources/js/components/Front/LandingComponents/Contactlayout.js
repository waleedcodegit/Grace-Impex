import React, { Component } from 'react';
import Axios from 'axios'
import Swal from 'sweetalert2'
export default class Contactlayout extends Component {
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
    <section class="contact-layout3 p-10 mt--130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="contact-panel">
              <form method="post" action="assets/php/contact.php" id="contactForm" class="contact__panel-form">
                <div class="row mb-40">
                  <div class="col-sm-12 col-lg-5 col-lg-7">
                    <h4 class="contact__panel-title">Request A Quote</h4>
                    <p class="contact__panel-desc">Complete control over products allows us to ensure our customers receive the best quality prices and service. We take great pride in everything that we do in our factory.</p>
                  </div>
                  <div class="col-sm-12 col-md-5 col-lg-5">
                    <div class="contact__panel-info">
                      <strong class="contact__panel-info-title">We will get back to you within 24 hours, or call us everyday, 09:00 AM - 12:00 PM</strong>
                      <div class="contact__number d-flex align-items-center">
                        <i class="icon-phone"></i>
                        <a href="tel:+92 42 35121974">+92 321 8581212</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input type="text" onChange={this.name.bind(this)} class="form-control" placeholder="Name" id="contact-name" name="contact-name"
                        required/>
                    </div>
                    <div class="form-group">
                      <input type="text" onChange={this.phone.bind(this)} class="form-control" placeholder="Phone" id="contact-Phone"
                        name="contact-phone" required/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input type="email" onChange={this.email.bind(this)} class="form-control" placeholder="Email" id="contact-email"
                        name="contact-email" required/>
                    </div>
                    <div class="form-group">
                      <select class="form-control">
                        <option>Country</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>UAE</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <textarea onChange={this.msg.bind(this)} class="form-control" placeholder="Additional Details!" id="contact-messgae"
                        name="contact-messgae" required></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12 d-flex d-flex align-items-center">
                    <button onClick={this.submit_request.bind(this)} type="submit" class="btn btn__secondary mr-40">
                      <span class="mx-2">Submit Request</span><i class="icon-arrow-right mx-2"></i>
                    </button>
                    <div class="form-group input-radio my-3">
                      <label class="label-radio">I accept the privacy and terms.
                        <input type="checkbox" checked/>
                        <span class="radio-indicator"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
        );
    }
}

