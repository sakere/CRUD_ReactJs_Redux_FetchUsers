import React, { Component } from 'react';
import {connect} from 'react-redux';

class Error extends Component {
  render() {
  return (
    <div className="post">
        <h2 className="center">{this.props.error}</h2>
      
    </div>
  );
 }
}
export default connect()(Error);