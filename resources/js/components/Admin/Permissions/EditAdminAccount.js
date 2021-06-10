import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'

class EditAdminAccount extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            username:'',
            password:'',
            role:'',
            roles:[],
            status:''
        }
    }
    componentDidMount(){
        let senderdata = {
         id:this.props.match.params.id
        }
        Axios.post('/api/get_roles',senderdata).then(res=>{
            console.log(res);
            this.setState({
                roles:res.data
            })
        })
        Axios.post('/api/get_admin_account_by_id',senderdata).then(res=>{
            console.log(res);
            this.setState({
                name:res.data.name,
                username:res.data.username,
                password:res.data.password,
                role:res.data.role_id,
                status:res.data.status
            })
        })  
    }
    name(e){
        this.setState({
            name:e.target.value
        })
    }
    username(e){
        this.setState({
            username:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    role(e){
        this.setState({
            role:e.target.value
        })
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }
    Update_admin_account(){
        if(this.state.name != '' && this.state.username != '' && this.state.password != '' && this.state.role != ''){
            let senderdata={
                name:this.state.name,
                username:this.state.username,
                password:this.state.password,
                role_id:this.state.role,
                status:this.state.status,
                id:this.props.match.params.id
            }
            Axios.post('/api/Update_admin_account',senderdata).then(res=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Admin Account Updated SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                    })
            })
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please fill all the fields',
                showConfirmButton: false,
                timer: 1500
                })
        }
        
    }
    render() {
        return (
            <div>
                <div className="top_section_title_div">
                    <h2 className="section_title">Add Admin Accounts</h2>
                </div> 
                <div className="container">
                    <div className="card mt-3">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Name</label>
                                <input value={this.state.name || ""} onChange={this.name.bind(this)} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product code" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Username</label>
                                <input value={this.state.username || ""} onChange={this.username.bind(this)}  type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Password</label>
                                <input value={this.state.password || ""} onChange={this.password.bind(this)} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product code" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Role</label>
                                <select value={this.state.role || ""} type="name" className="form-control col-sm-6 mt-2 " onChange={this.role.bind(this)}  >
                                <option value=''>--Select User Account--</option>
                                {
                                    this.state.roles.map((data,index)=>{
                                        return(
                                            <option value={data.id} key={index}>{data.name}</option>
                                        )
                                    })
                                }
                            </select>
                            </div>
                        </div>
            
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Status</label>
                                <select value={this.state.status || ""} onChange={this.status.bind(this)} type="email" class="form-control " 
                                 aria-describedby="emailHelp" placeholder="Product code" >
                                     <option value="Active">Active</option>
                                     <option value="Disable">Disable</option>
                                 </select>
                            </div>
                        </div>
                        <div className="mt-3 ml-3 mb-3">
                            <button onClick={this.Update_admin_account.bind(this)} className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditAdminAccount;