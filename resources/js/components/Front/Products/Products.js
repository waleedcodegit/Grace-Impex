import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import Footer from '../LandingComponents/Footer'
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            CategoryName:''
        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/get_products_by_sub_cat',senderdata).then(res=>{
            this.setState({
                products:res.data
            })
        })
         Axios.post(baseurl+'/api/get_category_by_sub_cat_id',senderdata).then(res=>{
            this.setState({
                CategoryName:res.data[0].name,
            })
        })
        
    }
    render() {
       
        return (
            <div>
                <Navbar></Navbar>
                <div className="products_page container mb-5">
                    <h1 className="title-text text-center mb-4">{this.state.CategoryName}</h1>
                    <h2 className="page_title text-center">Products</h2>

                    {
                         this.state.products.length == 0 ?
                                <div className="container mt-5">
                                    <h5 classNam="text-center" style={{alignSelf:'center',color:'gray'}}>No Products Founded</h5>
                                </div>
                        :null
                    }
                    
                    <div className="row"> 
                        {
                  
            this.state.products.map((data,index)=>{
              return(
                <a href={"/Product/"+data.id}>  <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div className="popProductCard text-center">
                            {/* <div className=" redCircle  ">
                                <h3 className="pt-4 text-white">28%</h3>
                                <p className="text-white paraText">OFF</p>
                            </div> */}
                            
                            {
                                data.images.length > 0 ?
                                <img className="popImage" src={img_baseurl+data.images[0].image}></img>
                                :<img className="popImage" src={"/images/noimage.png"}></img>
                            }
                            <h1 className=" text-bold featureItemText pt-2">{data.name}</h1>
                            <div className="row priceRow">
                                <div className="col-6">
                                {/* <div className="priceCancelText text-secondary">Rs 4000</div> */}
                                </div>
                                <div className="col-6">
                                <div className="priceText">Rs {data.cheep_varient.price}</div>
                                </div>
                            </div>
                            </div>
                        </div></a>
                        )
                        })
                    }

                    </div>
               
                </div>
                <Footer />
            </div>
        );
    }
}

export default Products;