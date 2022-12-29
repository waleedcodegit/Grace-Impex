import React, { Component } from 'react';
import Nav from '../NavBar';
import Footer from '../LandingComponents/Footer';

class ecatalogue extends Component {
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
                                    <h1 class="pagetitle__heading mb-0">E - Catalogue</h1>
                                </div>{/*-- /.col-xl-6 */}
                            </div>{/*-- /.row */}
                        </div>{/*-- /.container */}
                    </section>
                    <section className="about-layout2">
                        <div className="container-fluid col-padding-0">
                            <div class="row align-items-center">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <h1 class="heading__title text-center mb-3">MASTER CATALOGUE</h1>
                                </div>{/*-- /.col-xl-6 */}
                            </div>
                            <div className="row col-sm-12" style={{alignItems:'center' , justifyContent: 'center'}}>
                                <div className="col-md-3 px-3" >
                                    <a href="https://www.grace-impex.com/pdf/Grace-Master.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/master_catalogue.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>View Master Catalogue</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-5">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <h1 class="heading__title text-center mt-3">Categories</h1>
                                </div>
                            </div>
                            <div className="row col-sm-12">
                                <div className=" col-md-4 col-lg-3 px-3">
                                    <a href="https://www.grace-impex.com/pdf/Agro-Chemicals.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_agro.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Agro Chemicals</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3">
                                    <a href="https://www.grace-impex.com/pdf/Cosmetic.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_cosmetics.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Cosmetics</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3">
                                    <a href="https://www.grace-impex.com/pdf/FMCG.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_FMCG.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>FMCG</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3">
                                    <a href="https://www.grace-impex.com/pdf/Food-Packaging.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_food.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Food Packaging</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3 mt-3">
                                    <a href="https://www.grace-impex.com/pdf/Household.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_household.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Household</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3 mt-3">
                                    <a href="https://www.grace-impex.com/pdf/Pet-Preforms.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_petpreforms.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Pet Preforms</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3 mt-3">
                                    <a href="https://www.grace-impex.com/pdf/Pharmaceutical-Bottles.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_pharma.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Pharmaceuticals</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3 mt-3">
                                    <a href="https://www.grace-impex.com/pdf/Plastic-Caps-and-Closure.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_candc.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Plastic Caps & Closure</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3 mt-3">
                                    <a href="https://www.grace-impex.com/pdf/Refrigerator-Bottles.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_refrigerator.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Refrigerator Bottles</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className=" col-md-4 col-lg-3 px-3 mt-3">
                                    <a href="https://www.grace-impex.com/pdf/Shower-Spray-Bottles.pdf" target='_blank'>
                                        <div className="card card-1">
                                            <img style={{ width: '100%' }} src="/images/cat_shower.jpg" />
                                            <h1 className="text-center mt-3 mb-3" style={{ fontSize: '20px' }}>Shower Spray Bottles</h1>
                                        </div>
                                    </a>
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

export default ecatalogue;