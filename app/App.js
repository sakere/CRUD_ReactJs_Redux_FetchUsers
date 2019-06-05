import React, { Component } from 'react';
import UserForm from './UserForm';
import AllUsers from './AllUsers';
import {get} from 'wtfetch';
import {connect} from 'react-redux';


class App extends Component {
    componentDidMount(){
        get('https://reqres.in/api/users')
        .then((bodyJSON) => {
            let data= bodyJSON.data
            this.props.dispatch({
                type:'FETCH_USERS',
                data});
          }).catch((e) => {
            console.log('Oops there was an error', e);
          })

    }
  render() {
    return (
    <div className="App">
        <div className="navbar">
            <h2 className="center">User CRUD</h2>
        </div>
        <UserForm />
        <AllUsers />
    </div>
    );
    }
  }
export default connect()(App)