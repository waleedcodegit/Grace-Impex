import React, { Component } from 'react';
import Nav from '../NavBar'
import Footer from '../LandingComponents/Footer'
import Axios from 'axios'
import {baseurl ,img_baseurl } from '../../Configs/apibase'
import Modal from 'react-bootstrap/Modal'
// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
import Pagination from '@material-ui/lab/Pagination';
import Categories from '../LandingComponents/Categories';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            CategoryName:'',
            modal:false,
            modal_data:[],
            activePage: 15,
            last_page:'',
            current_page:'',
            loading:false,
            image:'noimage.png'
        }
    }
    handlePageChange(e,pageNumber) {
        console.log(pageNumber);
        this.setState({
            loading:true
        })
    Axios.post(baseurl+'/api/get_all_enabled_products?page='+pageNumber).then(res=>{
            console.log(res);
            this.setState({
                products:res.data.data,
                current_page:res.data.current_page,
                loading:false
            })
        })
  }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        
        Axios.post(baseurl+'/api/get_all_enabled_products').then(res=>{
            console.log(res);
            this.setState({
                products:res.data.data,
                image:res.data.data[0].images[0].image,
                current_page:res.data.current_page,
                last_page:res.data.last_page
            })
        })
        
    }
    show_modal(data){
        console.log(data);
        this.setState({
            modal_data:data,
           
        },function(){
            this.setState({
                modal:true
            })
        })
    }
    hide_modal(){
        this.setState({
            modal:false
        })
    }
    change_image(image){
      this.setState({
        image:image
      })
    }
    render() {
        return (
    <div class="wrapper">
    <div class="preloader">
      <div class="loading"><span></span><span></span><span></span><span></span></div>
    </div>{/*-- /.preloader */}

    {/*-- =========================
        Header
    =========================== */}
    <Nav/>{/*-- /.Header */}

    {/*-- ========================
       page title 
    =========================== */}
    <section class="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center"  style={{height:'350px'}}>
      <div class="bg-img" ><img src="assets/images/page-titles/9.jpg" alt="background"/></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h1 class="pagetitle__heading mb-0">Products</h1>
          </div>{/*-- /.col-xl-6 */}
        </div>{/*-- /.row */}
      </div>{/*-- /.container */}
    </section>{/*-- /.page-title */}

    {/*-- =========================== 
      portfolio Grid 
    ============================= */}
    
    <Categories />
    <Footer />
 {
            this.state.modal ?
          <Modal
        size="lg"
        show={this.state.modal}
        onHide={this.hide_modal.bind(this)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Product {this.state.modal_data.code}
          </Modal.Title>
                </Modal.Header>
            <Modal.Body>
            <div class="portfolio__img">
                <img src={img_baseurl+this.state.modal_data.images[0].image} alt="portfolio img"/>
              </div>
        </Modal.Body>
          
       
      </Modal>
        :null
        }
        
  </div>
        );
    }
}

export default Products;