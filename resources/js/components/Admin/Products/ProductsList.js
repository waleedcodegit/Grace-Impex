import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl,img_baseurl} from '../../Configs/apibase'
import {Link} from 'react-router-dom'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Pagination from '@material-ui/lab/Pagination';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
             last_page:'',
            current_page:'',
            loading:false
        }
    }
    handlePageChange(e,pageNumber) {
        console.log(pageNumber);
        this.setState({
            loading:true
        })
    Axios.post(baseurl+'/api/get_all_products?page='+pageNumber).then(res=>{
            console.log(res);
            this.setState({
                products:res.data.data,
                current_page:res.data.current_page,
                loading:false
            })
        })
  }
    componentDidMount(){
        let senderdata={

        }
        Axios.post(baseurl+'/api/get_all_products',senderdata).then(res=>{
            console.log(res);
            this.setState({
                products:res.data.data,
                current_page:res.data.current_page,
                last_page:res.data.last_page
            })
        })
    }
    DeleteProduct(id,i){
        let senderdata={
            id:id
        }
        Axios.post(baseurl+'/api/deleteproduct',senderdata).then(res=>{
           
            var products = this.state.products;
            products.splice(i,1);
            this.setState({
                products:products
            })
        });
    }
    render() {
        return (
            <div>
               <div className="top_section_title_div">
                    <h2 className="section_title">Products List</h2>
                </div> 
                <div className="container-fluid">
                    <div className="card content_card_div mt-4 mb-5">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>sr</th>
                                    <th>Image</th>
                                    <th>ID</th>
                                    <th>Product Code</th>
                                    <th>Name</th>
                                    <th>Varient Type</th>
                                    <th>Enabled</th>
                                    <th colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((data,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td><img style={{width:'60px',height:'60px'}}
                                                src={data.images.length > 0 ? img_baseurl+data.images[0].image :''}></img></td>
                                                <td>{data.id}</td>
                                                <td>{data.code}</td>
                                                <td>{data.name}</td>
                                                <td>{data.varient_type}</td>
                                                <td>{data.enabled}</td>
                                                <td>
                                                    <MDBDropdown basic style={{left:'70px'}}>
                                                    <MDBDropdownToggle style={{padding:'2px'}}   color="light">
                                                       <li style={{fontSize:'20px',color:'#588da8',}} className="fas fa-bars"></li>
                                                    </MDBDropdownToggle>
                                                    <MDBDropdownMenu >
                                                        <MDBDropdownItem><Link to={`/adminpanel/EditProduct/${data.id}`}>Update</Link></MDBDropdownItem>
                                                        <MDBDropdownItem><Link to={`/adminpanel/ProductValues/${data.id}`}>Product Keys</Link></MDBDropdownItem>
                                                        <MDBDropdownItem><Link to={`/adminpanel/ProductImages/${data.id}`}>Product Images</Link></MDBDropdownItem>

                                                        <MDBDropdownItem onClick={this.DeleteProduct.bind(this,data.id,index)} className="text-danger">Delete</MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                    </MDBDropdown>
                                                </td>
                                                {/* <td><Link to={`/adminpanel/EditProduct/${data.id}`}><button className="btn btn-warning"> <i style={{color:'#ffffff'}} className="far fa-edit"> </i></button></Link></td>
                                                <td><button className="btn btn-light"> <i  style={{color:'red'}} onClick={this.DeleteProduct.bind(this,data.id,index)} className="fas fa-trash-alt"></i>
                                                        </button></td> */}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <Pagination onChange={this.handlePageChange.bind(this)} count={this.state.last_page} shape="rounded" />
                    </div>
                </div>    
            </div>
        );
    }
}

export default ProductsList;