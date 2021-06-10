import React, { Component } from 'react';
import {connect} from 'react-redux'
class Myaccount extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },2000)
    }
    render() {
        return (
            <div>
               {
                   this.state.loading ? 
                   <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2" style={{ width: '60px', height: '60px' }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :
                    <div className="mt-5">
                        <h3>ID: {this.props.user.cid}</h3>
                        <h3>Name: {this.props.user.name}</h3>
                        <h3>Username: {this.props.user.username}</h3>
                        <h3>Email: {this.props.user.email}</h3>
                    </div>
               }
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
  }
export default connect(mapStateToProps)(Myaccount);