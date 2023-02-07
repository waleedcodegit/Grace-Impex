import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return (
            <section className="about-layout2">
                <div className="container-fluid col-padding-0">
                    <h2 class="heading__title text-center mb-3">Our Range Of Products</h2>
                    <div className="row mt-5" style={{alignItems:'center' , justifyContent: 'center'}}>
                        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 px-3">
                            <a href="/hdpe">
                                <div className="card card-1">
                                    <img style={{ width: '100%' }} src="/images/HDPE.jpg" />
                                    <h1 className="text-center mt-3 mb-3" style={{ fontSize: '22px' }}>HDPE</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 px-3">
                            <a href="/pet-bottels">
                                <div className="card card-1">
                                    <img style={{ width: '100%' }} src="/images/pet-bottles.jpg" />
                                    <h1 className="text-center mt-3 mb-3" style={{ fontSize: '22px' }}>PET Bottles</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 px-3">
                            <a href="/products/pet-performs">
                                <div className="card card-1">
                                    <img style={{ width: '100%' }} src="/images/pet-preforms.jpg" />
                                    <h1 className="text-center mt-3 mb-3" style={{ fontSize: '22px' }}>PET Preforms</h1>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                    <div className="row mt-5" style={{alignItems:'center' , justifyContent: 'center'}}>
                        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 px-3">
                            <a href="/plastic-caps">
                                <div className="card card-1">
                                    <img style={{ width: '100%' }} src="/images/plastic-caps-closures.jpg" />
                                    <h1 className="text-center mt-3 mb-3" style={{ fontSize: '22px' }}>Plastic Caps &amp; Closures</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 px-3">
                            <a href="/products/plastic-pumps">
                                <div className="card card-1">
                                    <img style={{ width: '100%' }} src="/images/plastic-pumps.jpg" />
                                    <h1 className="text-center mt-3 mb-3" style={{ fontSize: '22px' }}>Plastic Pumps</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Categories;
