import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import {Link} from 'react-router-dom'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            distributor:[],
            discounted_products:[]
        }
    }
    
    componentDidMount(){
        let senderdata = {
            id:this.props.id
        }
        Axios.post('/api/get_distributor_by_id',senderdata).then(res=>{
            console.log(res);
            this.setState({
                distributor:res.data
            })
        })
        Axios.post('/api/distributor_discount_products',{distributor_id:this.props.id}).then(res=>{
            this.setState({
                discounted_products:res.data
            })
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 row mt-1 ml-2">
                        <div className="col-md-3 ml-2 ">
                            <img style={{width:'120px',height:'120px'}} src={img_baseurl+"noimage.png"}></img>
                        </div>
                        <div className="col-md-8 ml-2 mt-3 ">
                            <h4>{this.state.distributor.fname} {this.state.distributor.lname}</h4>
                            <h6>{this.state.distributor.company}</h6>
                            <h6>{this.state.distributor.phone}</h6>
                            <h6>{this.state.distributor.email}</h6>
                    </div>  
                    </div>
                    <div className="col-md-3 mt-1 ml-2 left_border">
                        <h4>{this.state.distributor.country}</h4>
                        <h6>{this.state.distributor.city}</h6>
                    </div> 
                    <div className="col-md-2 mt-1 ml-2 left_border">
                        <h4>{this.state.distributor.address}</h4>
                        <h6>Distributor</h6>
                    </div> 
                </div>
                <div className="mt-2">
                    <h6>Distributor ID: 000{this.state.distributor.id}</h6>
                </div>
                <div className="mt-5 col-md-6">
                    <div className="row">
                        <h6 className="col-md-8 mt-2 text-bold">Discount on Products</h6>
                        <Link className="col-md-4 " to={`/adminpanel/AddDiscountonproducts/${this.props.id}`}><button className="btn btn-info">Add Product</button></Link>
                    </div>
                    <div className="mt-3">
                                <table className="table table-bordered table-stripped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Sr</th>
                                            <th>ID</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Varient</th>
                                            <th>Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            this.state.discounted_products.map((data, index) => {
                                                return (
                                                    <tr key={index}>
                                                       <td>{index+1}</td>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.code}</td>
                                                        <td>{data.varient.name}</td>
                                                        <td>{data.varient.discount}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                </div>
            </div>
        );
    }
}

export default Profile;