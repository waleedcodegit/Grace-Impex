import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            let senderdata = {
                cus_id:this.props.user.cid
            }
            console.log(senderdata);
            Axios.post(baseurl+'/api/get_orders_by_customer_id',senderdata).then(res=>{
                console.log(res);
                this.setState({
                    orders:res.data
                })
            })
        },2000)
    }
    render() {
        return (
            <div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>sr</th>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.orders.map((data,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.date}</td>
                                        <td>{data.totals}</td>
                                        <td>{data.status}</td>
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
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
  }
export default connect(mapStateToProps)(MyOrders);