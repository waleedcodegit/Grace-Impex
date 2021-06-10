import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl,img_baseurl} from '../../Configs/apibase'
import {Link} from 'react-router-dom'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class DistributorsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            distributors:[]
        }
    }
    
    componentDidMount(){
        let senderdata={

        }
        Axios.post(baseurl+'/api/get_distributors',senderdata).then(res=>{
            this.setState({
                distributors:res.data.distributors
            })
        })
    }
    
    render() {
        return (
            <div>
               <div className="top_section_title_div">
                    <h2 className="section_title">Distributors List</h2>
                </div> 
                <div className="container-fluid">
                    <div className="card content_card_div mt-4 mb-5">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.distributors.map((data,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{data.id}</td>
                                                <td>{data.fname} {data.lname}</td>
                                                <td>{data.company}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.city}</td>
                                                <td>{data.status == 1 ? 'Active':'Diasabled'}</td>
                                                <td>
                                                    <MDBDropdown basic style={{left:'70px'}}>
                                                    <MDBDropdownToggle style={{padding:'2px'}}   color="light">
                                                       <li style={{fontSize:'20px',color:'#588da8',}} className="fas fa-bars"></li>
                                                    </MDBDropdownToggle>
                                                    <MDBDropdownMenu >
                                                        <MDBDropdownItem><Link to={`/adminpanel/EditProduct/${data.id}`}>Update</Link></MDBDropdownItem>
                                                        <MDBDropdownItem><Link to={`/adminpanel/DistributorView/${data.id}`}>View</Link></MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                    </MDBDropdown>
                                                </td>
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
export default DistributorsList;