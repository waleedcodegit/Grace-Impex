import React, { Component } from 'react';
import NavBar2 from '../NavBar2';
import Footer from './Footer';
 
class PetBottels extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
        <>
        <NavBar2></NavBar2>
        <section className="about-layout2">
        <div className="container col-padding-0">
            <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/agro-chemical">
                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-agro-chemical.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Agro Chemical</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/cosmetic-bottels">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-cosmetic-bottles.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Cosmetic Bottles</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/fmcg-bottels">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-fmcg-products.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>FMCG Products</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>                   
            </div>
            <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/food-packaging">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-food-packaging.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Food Packaging</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/fridge-bottels">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-fridge-bottles.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Fridge Bottles</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/househols-packaging">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-household-packaging.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Household Packaging</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>                   
            </div>
            <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/pharmaceutical">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-pharmaceutical.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Pharmaceutical</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/shower-spray-bottels">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/sub-shower-spray-bottles.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>Shower Spray Bottles</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            </div>
        </div>
        </section>
        <Footer></Footer>
        </>
        );
    }
}
 
export default PetBottels;