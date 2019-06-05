import React, { Component } from 'react';

import { connect } from 'react-redux';

import User from './User';
import { Field, reduxForm } from 'redux-form'

import EditComponent from './EditComponent';
import SingleUser from './SingleUser';

class AllUsers extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Users</h1>
                {this.props.userDetails.map((user) => (
                    <div key={user.id}>
                        {user.editing ? <EditComponent user={user} key={user.id} /> :
                            <User key={user.id} user={user} />}
                    </div>
                ))}
                 <SingleUser/>
               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state
    }
}
export default connect(mapStateToProps)(AllUsers)