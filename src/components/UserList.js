import React, { Component } from 'react';
import '../styles/App.css';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {userList,selectUser,deleteUser} from '../actions';
class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleteUsersList : []
        }
    }
    componentWillMount(){
        this.props.userList()
    }
    pickUser(item){
        
        this.props.selectUser(item)
    }
    handleCheckBox(index){
        console.log("handle check",index)
        this.setState(prevState => ({
            deleteUsersList: [...prevState.deleteUsersList, index]
        }))
    }
    // handleDelete(){
    //     console.log("indexList")
    //     console.log(this.state.deleteUsersList)
    //     this.props.deleteUser(this.state.deleteUsersList)
    // }
    renderUsers = (user) => (
        user ? user.map((item,i) => (
            <div  key={i} className="userItem">
                <input type="checkbox" onClick={() => this.handleCheckBox(item.name)} />
                <p onClick={() => this.pickUser(item)}>{item.name}</p>
            </div>
            
        )):null
    )
    
  render() {
    return (
      <div>
          <button onClick={() => this.props.deleteUser(this.state.deleteUsersList)}>DELETE</button>
          {this.renderUsers(this.props.users)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.userDataList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({userList,selectUser,deleteUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (UserList);