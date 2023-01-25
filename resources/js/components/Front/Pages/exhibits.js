import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'

class exhibits extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="preloader">
                    <div class="loading"><span></span><span></span><span></span><span></span></div>
                </div>{/*-- /.preloader */}

                {/*-- =========================Header=========================== */}
                <Nav />   
                {/*-- /.Header */}

                {/*-- ========================page title=========================== */}
                <section class="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center">
                    <div class="bg-img"><img src="assets/images/page-titles/page_title_new.jpg" alt="background" /></div>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1 class="pagetitle__heading mb-0">Exhibitions</h1>
                            </div>{/*-- /.col-xl-6 */}
                        </div>{/*-- /.row */}
                    </div>{/*-- /.container */}
                </section>{/*-- /.page-title */}

                {/*-- ======================Blog Grid========================= */}
                <section class="blog-grid">
                    <div class="container">
                        <div class="row">
                            {/*-- Blog Item #1 */}
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <div class="blog-item">
                                    <div class="blog__img">
                                        <a href="/exhibits_">
                                            <img src="assets/images/exhibits/8.jpg" alt="blog image" />
                                        </a>
                                    </div>{/*-- /.blog-img */}
                                    <div class="blog__content">
                                        <div class="blog__meta">
                                            <div class="blog__meta-cat">
                                                <a href="/exhibits_">Joint Venture between</a>
                                            </div>  
                                            {/* -- /.blog-meta-cat */}
                                        </div>{/*-- /.blog-meta */}
                                        <h4 class="blog__title"><a href="#">GRACE IMPEX (SMC-PVT) LIMITED & HONGZHEN MACHINE & MOLD GROUP, CHINA</a></h4>
                                        {/* <p class="blog__desc">The trade war currently ensuing between the US and several nations around the
                                            globe, most fiercely with China, shows no signs of the first set of tariffs levied against solar...
                                        </p> */}
                                        <a href="/exhibits_" class="btn btn__secondary btn__link">
                                            <span>View More</span>
                                            <i class="icon-arrow-right"></i>
                                        </a>
                                    </div>{/*-- /.blog-content */}
                                </div>{/*-- /.blog-item */}
                            </div>{/*-- /.col-lg-4 */}
                        </div>{/*-- /.row */}
                        {/* <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                                <nav class="pagination-area">
                                    <ul class="pagination justify-content-center">
                                        <li><a class="current" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#"><i class="icon-arrow-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>{/*-- /.container */}
                </section>{/*-- /.blog Grid */}



                <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>
                <Footer />
            </div>
        );
    }
}

export default exhibits;