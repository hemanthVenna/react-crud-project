import React, { Component } from 'react';
import '../styles/App.css';
import UserList from './UserList';
import UserDetails from './UserDetails';
import Modal from 'react-modal';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {addUser} from '../actions'

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      
      newUser:{
        name:"",
      id:"",
      description:"",
      }
      
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleNameChange(event){
    this.setState({newUser:{...this.state.newUser, name:event.target.value}})
  }
  handleIdChange(event){
    this.setState({newUser:{...this.state.newUser, id:event.target.value}})
  }
  handleDescriptionChange(event){
    this.setState({newUser:{...this.state.newUser, description:event.target.value}})
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.newUser)
    this.props.addUser(this.state.newUser)
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Add Coupons UI</h1> */}
          <button onClick={this.openModal}>Open Modal</button>

        </header>
        <div className="App-intro">
          <div className="usersWrap">
            <UserList />
          </div>
          <div className="coreContentWrap">
             <UserDetails />
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <div>
              <input type="text" name="name" placeholder="Name" onBlur={this.handleNameChange} />
            </div>
            <div>
              <input type="text" name="id" placeholder="Id" onBlur={this.handleIdChange} />
            </div>
            <div>
            <textarea type="text" name="description" placeholder="Description" onBlur={this.handleDescriptionChange}></textarea>
            </div> 
            <div>
              <input type="submit" onClick={this.handleSubmit} />
              </div>           
          </form>
        </Modal>

      </div>
    );
  }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// const mapStateToProps = (state) => {
//   users:state.userDataList
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addUser},dispatch)
}

export default connect(null,mapDispatchToProps) (App);
