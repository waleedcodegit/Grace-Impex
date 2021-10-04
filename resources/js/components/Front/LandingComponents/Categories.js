import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return (
          <section className="about-layout2">
        <div className="container col-padding-0">
        <h2 class="heading__title text-center mb-3">Our Range Of Products</h2>

            <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
            <a href="/pet-bottels">
                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/pet-bottles.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Pet Bottle</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
            <a href="/products/pet-performs">
                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/pet-preforms.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Pet Preforms</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
            <a href="/plastic-caps">
                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/plastic-caps-closures.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Plastic Caps &amp; Closures</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
            <a href="/products/plastic-pumps">
                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/plastic-pumps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Plastic Pumps</h3>
                    </div>
                </div>
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
