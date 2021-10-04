import Axios from 'axios';
import React, { Component } from 'react';
import { img_baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import Footer from '../LandingComponents/Footer'
class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            CategoryName:'',
            data:[]
        }
    }
    componentDidMount(){
        let senderdata = {
            slug:this.props.match.params.slug
        }
        Axios.post('/api/get_products_by_cat',senderdata).then(res=>{
            this.setState({
                products:res.data.products,
                data:res.data,
                CategoryName:res.data.category.name
            })
        })
        
        
    }
    render() {
       
        return (
            <div>
                <Navbar></Navbar>
                <section class="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center">
                <div class="bg-img" style={{height:'350px'}}><img src="/assets/images/page-titles/9.jpg"  alt="background"/></div>
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <h1 class="pagetitle__heading mb-0">{this.state.CategoryName}</h1>
                    </div>{/*-- /.col-xl-6 */}
                    </div>{/*-- /.row */}
                </div>{/*-- /.container */}
                </section>{/*-- /.page-title */}
             <div>
                <section className="careers pb-70">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                        <div className="heading text-center mb-50">
                            {/* <h2 className="heading__title">20mm Caps</h2> */}
                        </div>{/* /.heading */}
                        </div>{/* /.col-lg-10 */}
                    </div>{/* /.row */}
                    </div>{/* /.container */}
                </section>
                <section className="portfolio-single pt-0 pb-50">
                    <div className="container">
                    <div className="row">
                        {/* /.col-lg-12 */}
                        {/* /.fancybox-layout2  */}
                        <div className="portfolio-gallery">
                        <div className="row">
                            {/* portfolio item #1 */}
                            {
                                this.state.products.map((data,index)=>{
                                    return(
                                        <div key={index} className="col-sm-6 col-md-6 col-lg-4">
                                            <div className="portfolio-item">
                                                <div className="portfolio__img">
                                                    <a className="popup-gallery-item" href={img_baseurl+data.image.image}>
                                                        <img src={img_baseurl+data.image.image} alt="portfolio img" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                          
                        </div>{/* /.row */}
                        </div>{/* /.portfolio gallery */}
                    </div>{/* /.row */}
                    {/* /.row */}
                    </div>{/* /.container */}
                    {/* /.container-fluid */}
                    {/* /.container */}
                </section>{/* /.portfolio single */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductsPage;