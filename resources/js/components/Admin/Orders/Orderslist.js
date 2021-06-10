import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';

class Orderslist extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[],
            customers:[]
        }
    }
    
    componentDidMount(){
        Axios.post(baseurl+'/api/get_all_orders').then(res=>{
            this.setState({
                orders:res.data
            })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Order Lists</h2>
                </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>sr</th>
                            <th>ID</th>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Customer Phone</th>
                            <th>Order Total</th>
                            <th>Order Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.orders.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.cus_id}</td>
                                        <td>{data.fname} {data.lname}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.totals}</td>
                                        <td>{data.status}</td>
                                        <td><button className="btn btn-warning"> <i style={{color:'#ffffff'}} className="far fa-edit"> </i></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Orderslist;