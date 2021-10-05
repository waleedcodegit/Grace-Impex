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
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/20mm-caps">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/20mm-caps.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>20mm Caps</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/24mm-caps">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/24mm-caps.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>24mm Caps</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/25mm-caps">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/25mm-caps.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>25mm Caps</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/28mm-caps">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/25mm-caps.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>28mm Caps</h1>
                </div>
                </a>
            </div>
            
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/30mm-caps">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/30mm-caps.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>30mm Caps</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/38mm-caps">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/38mm-caps.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>38mm Caps</h1>
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