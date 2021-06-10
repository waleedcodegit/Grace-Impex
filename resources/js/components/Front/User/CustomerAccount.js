import React, { Component } from 'react';
import Navbar from '../NavBar'
import {Tab,Tabs} from 'react-bootstrap'
import MyOrders from './MyOrders'
import MyAccount from './Myaccount'
class CustomerAccount extends Component {
    render() {
        return (
            <div >
                <Navbar></Navbar>
                <div className="products_page container">
                    <h2 className="page_title">Account</h2>
                </div>
                <div className="container">
                <Tabs defaultActiveKey="Account" id="uncontrolled-tab-example">
                <Tab eventKey="Account" title="Account">
                    <MyAccount></MyAccount>
                </Tab>
                <Tab eventKey="MyOrders" title="My Orders">
                   <MyOrders></MyOrders>
                </Tab>
                </Tabs>
                </div>
            </div>
        );
    }
}

export default CustomerAccount;