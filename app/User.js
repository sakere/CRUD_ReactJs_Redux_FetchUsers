import React, { Component } from 'react';
import Avatar from 'react-avatar';
import {connect} from 'react-redux';

class User extends Component {
  render() {
  return (
    <div className="post">
      <h2 className="post_title"><Avatar size="100" src={this.props.user.avatar} />{this.props.user.first_name} {this.props.user.last_name}</h2>
      {this.props.user.phoneNumber && <p className="post_message"> Phone Number : {this.props.user.phoneNumber}</p>}
      {this.props.user.userName && <p className="post_message">User Name : {this.props.user.userName}</p>}
      {this.props.user.address && <p className="post_message">Address : {this.props.user.address}</p>}
      {this.props.user.email && <p className="post_message">Email Id : {this.props.user.email}</p>}
      {this.props.user.pinCode && <p className="post_message">Pin Code :{this.props.user.pinCode}</p>}
      <div className="control-buttons">
      <button className="edit"
       onClick={()=>this.props.dispatch({type:'EDIT_USER',id:this.props.user.id})}>
       Edit</button>
      <button className="delete"
      onClick={()=>this.props.dispatch({type:'DELETE_USER',id:this.props.user.id})}>
      Delete</button>
      </div>
    </div>
  );
 }
}
export default connect()(User);