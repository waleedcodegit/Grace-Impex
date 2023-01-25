import React, { Component } from 'react';
import Nav from '../NavBar';
import Footer from '../LandingComponents/Footer';

class exhibits_ extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <div class="preloader">
                        <div class="loading"><span></span><span></span><span></span><span></span></div>
                    </div>

                    <Nav />
                    <section class="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center" style={{ height: '350px' }}>
                        <div class="bg-img" ><img src="assets/images/page-titles/page_title_new.jpg" alt="background" /></div>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <h1 class="pagetitle__heading mb-0">Exhibition</h1>
                                </div>{/*-- /.col-xl-6 */}
                            </div>{/*-- /.row */}
                        </div>{/*-- /.container */}
                    </section>
                    <section className="about-layout2">
                        <div className="container-fluid col-padding-0">
                            <div className="row col-sm-12">
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/1.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/11.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/3.jpg" />
                                        </div>
                                </div>
                            </div>
                            <div className="row col-sm-12">
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/10.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/5.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/6.jpg" />
                                        </div>
                                </div>
                            </div>
                            <div className="row col-sm-12">
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/7.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/9.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/8.jpg" />
                                        </div>
                                </div>
                            </div>
                            <div className="row col-sm-12">
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/4.jpg" />
                                        </div>
                                </div>
                                <div className=" col-md-4 col-lg-4 px-3">
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="assets/images/exhibits/2.jpg" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
                </div>
            </div>
            // <iframe
            // src="https://drive.google.com/file/d/1mkVJOEq8QP4B9Mqjhfqnup3rzK_00zAr/preview"
            // width="1350px"
            // height="600px">
            // </iframe>
        );
    }
}

export default exhibits_;