import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';

class CustomerLists extends Component {
    constructor(props) {
        super(props);
        this.state={
            customers:[],
        }
    }
    
    componentDidMount(){
        Axios.post(baseurl+'/api/get_all_customers').then(res=>{
            this.setState({
                customers:res.data
            })
        })
    }
    render() {
        return (
            <div >
                <div className="top_section_title_div">
                    <h2 className="section_title">Customer Lists</h2>
                </div>
                <table className=" container table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.username}</td>
                                        <td>{data.email}</td>
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

export default CustomerLists;