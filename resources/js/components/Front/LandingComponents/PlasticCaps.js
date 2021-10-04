import React, { Component } from 'react';
import NavBar2 from '../NavBar2';
import Footer from './Footer';
 
class PlasticCaps extends Component {
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
            <a href="/products/pharmaceutical">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/20mm-caps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>20mm Caps</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/pharmaceutical">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/24mm-caps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>24mm Caps</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/pharmaceutical">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/25mm-caps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>25mm Caps</h3>
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
                    <img className src="/images/28mm-caps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>28mm Caps</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/pharmaceutical">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/30mm-caps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>30mm Caps</h3>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
            <a href="/products/pharmaceutical">

                <div className="featured-block fblock-style1">
                <div className="featured-block-image">
                    <img className src="/images/38mm-caps.jpg" />
                    <div className="featured-block-overlay">
                    <div className="featured-block-overlay-bg secondary-bg" />
                    <h3 className="featured-block-title " style={{fontSize: '2rem'}}>38mm Caps</h3>
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
 
export default PlasticCaps;