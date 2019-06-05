import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class UserForm extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=  this.handleChange.bind(this);
        this.state={
          first_name:'',
          last_name:'',
          userName: '',
          phoneNumber:'',
          address:'',
          email:'',
          pinCode:''

        }
    }
  handleSubmit(e){
    e.preventDefault();
    const first_name = this.state.first_name;
    const last_name = this.state.last_name
    const userName = this.state.userName
    const phoneNumber = this.state.phoneNumber
    const address = this.state.address
    const email = this.state.email
    const pinCode = this.state.pinCode
    const data = {
      id: Math.floor(Math.random() * (9999 - 99 + 1)) + 99,
      first_name,
      last_name,
      userName,
      phoneNumber,
      address,
      email,
      pinCode,
      editing:false
    }
    this.props.dispatch({
      type:'ADD_USER',
      data});
      this.setState({first_name:'',last_name:'',userName:'',phoneNumber:'',address:'',email:'',pinCode:''})
  }
  handleChange (e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}
render() {
return (
<div className="post-container">
<h1 className="post_heading">Create User</h1>
<Form className="form" onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label  >First Name</Label>
          <Col >
            <Input type="text" value={this.state.first_name} name="first_name" id="first_name" placeholder="Enter a First Name" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup row>
          <Label  >Last Name</Label>
          <Col >
            <Input type="text" value={this.state.last_name} name="last_name" id="last_name" placeholder="Enter a Last Namer" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup row>
          <Label >User Name</Label>
          <Col >
            <Input type="text" value={this.state.userName} name="userName" id="userName" placeholder="Enter a User Name" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup row>
          <Label >Phone Number</Label>
          <Col >
            <Input type="number" value={this.state.phoneNumber} name="phoneNumber" id="phoneNumber" placeholder="Enter a Phone Number" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup row>
          <Label >Address</Label>
          <Col >
            <Input type="text" value={this.state.address} name="address" id="address" placeholder="Enter an Address" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup row>
          <Label >Email Id</Label>
          <Col >
            <Input type="email" value={this.state.email} name="email" id="email" placeholder="Enter an Email Address" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup row>
          <Label >Pin Code</Label>
          <Col >
            <Input type="number" value={this.state.pinCode} name="pinCode" id="pinCode" placeholder="Enter a Pincode" onChange={this.handleChange} required/>
          </Col>
        </FormGroup><br/><br/>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
        </Form>
</div>
);
}
}
export default connect()(UserForm);