import React, { Component } from 'react';
import '../styles/App.css';
// import UserList from './UserList'
import {connect} from 'react-redux';
// import {bindActionCreators} from "redux";
// import {userList} from '../actions';

class UserDetails extends Component {
  render() {
    if(!this.props.selectedUser){
      return (
        <div className="App">
        <p><strong>Click on user to view details</strong></p>
        
      </div>
      )
    }
      
    return (
      <div className="App">
        <p><strong>Name : </strong> {this.props.selectedUser.name}</p>
        <p><strong>Rating : </strong>{this.props.selectedUser.rating}</p>
        <p><strong>Description : </strong>{this.props.selectedUser.Description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        selectedUser:state.selectedUser
    }
}

export default connect(mapStateToProps)(UserDetails);