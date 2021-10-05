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
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/agro-chemical">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-agro-chemical.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Agro Chemical</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/cosmetic-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-cosmetic-bottles.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Cosmetic Bottles</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/fmcg-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-fmcg-products.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>FMCG Products</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/food-packaging">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-food-packaging.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Food Packaging</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/fridge-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-fridge-bottles.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Fridge Bottles</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/househols-packaging">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-household-packaging.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Household Packaging</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/pharmaceutical">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-pharmaceutical.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Pharmaceutical</h1>
                </div>
                </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 px-3 mt-3" >
            <a href="/products/shower-spray-bottels">
                <div className="card card-1">
                <img style={{width:'100%'}} src="/images/sub-shower-spray-bottles.jpg" />
                <h1 className="text-center mt-3 mb-3" style={{fontSize:'22px'}}>Shower Spray Bottles</h1>
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