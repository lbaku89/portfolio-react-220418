import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'; 

export default class Test2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      show : false,

    }
  }
  
  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});
  loginFn = () =>{


  }

  render() {
    return (
      <>
      <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="idInputTag">ID</label>
          <input id="idInputTag" name="adminId" type="text"></input>
          <label for="passwordInputTag">비밀번호</label>
          <input id="passwordInputTag" name="adminPassword" type="password"></input>
          <Link to="/preInterviewModify">접속하기</Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            로그인하기 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}
