import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { data } from 'jquery';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            loading: true,
            cart_products: [],
            cart_totals: 0
        }
    }
    componentDidMount() {
       
            let senderdata = {
                cart_cookie_id : window.localStorage.getItem('cart_cookie_id')
            }
            console.log(senderdata);
            Axios.post(baseurl + '/api/get_cookie_session_cart', senderdata).then(res => {
                if(res.data.cart){
                    if(res.data.cart.length > 0){
                        this.setState({
                            cart_products: res.data.cart[0].products,
                            cart_totals: res.data.cart[0].cart_totals,
                            cart:res.data.cart,
                           
                        },function(){
                            this.setState({
                                loading:false
                            })
                        })
                    }else{
                        this.setState({
                            loading:false
                        })
                    }
                }else{
                    this.setState({
                        loading:false
                    })
                }

               
            })
        

    }
    delete_from_cart(id){
        let senderdata = {
            id:id
        }
        Axios.post(baseurl+'/api/remove_product_from_cart',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Product Deleted From cart Successfully.',
                showConfirmButton: false,
                timer: 1500
            })
            this.componentDidMount();
        })
    }
    render() {
        return (
            <div className="container">
                <Navbar></Navbar>
                <div classNameName="products_page container">
                    <h2 className="page_title">Cart</h2>
                </div>
                {
                    this.state.loading ?
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2" style={{ width: '60px', height: '60px' }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <div>
                            {
                                this.state.cart.length > 0 ?
                                    <table className="table table-hover table-condensed">
                                        <thead>
                                            <tr>
                                                <th >Image</th>
                                                <th >Product</th>
                                                <th >Price</th>
                                                <th >Quantity</th>
                                                <th className="text-center">Subtotal</th>
                                                <th ></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.cart.map((data, index) => {
                                                    return (
                                                        <tr>
                                                            <td><img style={{width:'60px',height:'60px'}} src={img_baseurl+data.product[0].images[0].image}></img></td>
                                                            <td data-th="Product">
                                                                {data.product[0].name}
                                                            </td>
                                                            <td data-th="Price">{data.product[0].price}</td>
                                                            <td data-th="Quantity">
                                                                {data.qty}
                                                            </td>
                                                            <td data-th="Subtotal" className="text-center">{data.price}</td>
                                                            <td className="actions" data-th="">
                                                                <button onClick={this.delete_from_cart.bind(this,data.id)} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td><a href="/shop" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                                                <td colspan="2" className="hidden-xs"></td>
                                                <td className="hidden-xs text-center"><strong>Total {this.state.cart_totals}</strong></td>
                                                <td><a href="/Checkout" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
                                            </tr>
                                        </tfoot>
                                    </table> :
                                    <div>
                                        <h1>Your Cart Is Empty</h1>
                                    </div>
                            }
                        </div>
                }

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Cart);