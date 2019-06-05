import React, { Component } from 'react';
import { connect } from 'react-redux';
import {get} from 'wtfetch';
import User from './User';
import Error from './Error';

class SingleUser extends Component {
    constructor(){
        super()
        this.state={
            userId : -1,
            foundUserDetails: '',
            errorInd : false
        }
        this.findUser=this.findUser.bind(this);
        this.fetchUser=this.fetchUser.bind(this);
        this.displayUserDetails=this.displayUserDetails.bind(this);
    }

    findUser(e){
        e.preventDefault()
        if(e.target.value){
           return this.props.allUsers.map(user => {
                if (user.first_name.toLowerCase().includes(e.target.value.toLowerCase())){
                   this.setState({userId : user.id})
                }
            })
        }
    }
    fetchUser(){
            get(`https://reqres.in/api/users/${this.state.userId}`)
            .then((bodyJSON) => {
                let data= bodyJSON.data
                this.setState({foundUserDetails : data, errorInd:false, userId:-1})
              }).catch((e) => {
                console.log('Oops there was an error', e);
                this.setState({errorInd: true})
              })
    }
    displayUserDetails(){
        if(this.state.foundUserDetails && !this.state.errorInd){
            return <User user={this.state.foundUserDetails}/>
        }else if(this.state.errorInd===true){
            return <Error error={"User Not Found !!!"}/>
        }
    }
    render() {
        return (
            <div className="post">
                <h1 className="post_heading">Fetch User Details</h1>
                <div className="form">
                <input required type="text" onChange={this.findUser} placeholder="Enter First name / Last name" /><br/><br/>
                <button onClick={this.fetchUser}>Search</button>
                </div>
               
                {this.displayUserDetails()}
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allUsers: state
    }
}
export default connect(mapStateToProps)(SingleUser);