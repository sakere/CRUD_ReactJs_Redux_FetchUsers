import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    constructor(){
        super()
        this.handleEdit=this.handleEdit.bind(this)
    }
handleEdit (e){
  e.preventDefault();
  const newFirstName = this.getFirstName.value;
  const newLastName = this.getLastName.value;
  const newUserName = this.getUserName.value;
  const newPhoneNumber = this.getPhoneNumber.value;
  const newAddress = this.getAddress.value;
  const newEmailId = this.getEmailId.value;
  const newPinCode = this.getPinCode.value;
  const data = {
    id: new Date(),
    newFirstName,
    newLastName,
    newUserName,
    newPhoneNumber,
    newAddress,
    newEmailId,
    newPinCode,
    editing:false
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
}
render() {
return (
<div className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getFirstName = input}
    defaultValue={this.props.user.first_name} placeholder="Enter FirstName" /><br /><br />
    <input required type="text" ref={(input) => this.getLastName = input}
    defaultValue={this.props.user.last_name} placeholder="Enter LastName" /><br /><br />
    <input required type="text" ref={(input) => this.getUserName = input}
    defaultValue={this.props.user.userName} placeholder="Enter UserName" /><br /><br />
    <input required type="text" ref={(input) => this.getPhoneNumber = input}
    defaultValue={this.props.user.phoneNumber} placeholder="Enter Phone Number" /><br /><br />
    <input required type="text" ref={(input) => this.getAddress = input}
    defaultValue={this.props.user.address} placeholder="Enter Address" /><br /><br />
    <input required type="text" ref={(input) => this.getEmailId = input}
    defaultValue={this.props.user.email} placeholder="Enter EmailId" /><br /><br />
    <input required type="text" ref={(input) => this.getPinCode = input}
    defaultValue={this.props.user.pinCode} placeholder="Enter Pin Code" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}

export default connect()(EditComponent)