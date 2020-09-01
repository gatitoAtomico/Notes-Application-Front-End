import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Container, Col, TextArea} from 'reactstrap'; 
import axios from 'axios';
import Sidebar from './SideBar';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'body' : ''
    };

     this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
      e.preventDefault()
      //console.log(this.state.body)

      const data = {
        post : this.post,   
      }

    
      console.log('this is probably my post ',data)


      axios.post('addPost', data).then (

        res => {

        
             }).catch(
                err => {
                   this.setState({ message: err.response.data.message })
                }
            )

    }

   

    render() {
  
      if(this.props.User){
      return (
        <div>
        <Container fluid>
        <div className= "home-form">
          <div className ="row">
            <div className= "col-md-6">
              <div className="card">
                  <div className = "card-header">
                      Tweet something...
                  </div>
                <div className="card-body">
                  <Form onSubmit= {this.handleSubmit}>
                    <div className="form-group">
                      <textarea onChange = {e => this.post = e.target.value} className="form-control" rows="5" maxLength="140" placeholder="WHATS UP" required/>
                      </div>
                      <Button className="btn-lg btn-info btn-block">Submit</Button>
                  </Form>
                </div>
              </div>
              </div>
              <div className= "col-md-6">
              <div className="card">
                  <div className = "card-header">
                     Post History
                  </div>
                <div className="card-body">
                  hello
                </div>
              </div>
              </div>
              </div>
          </div>       
    </Container>
    </div>
      )
      }

      return (
        <div>
        <Container>

          <div className ="row">
            <div className= "col-md-12">
              <div className="card">
                <div className="card-body">
                  <h3>Please Log In</h3>
                </div>
              </div>
              </div>
     
              </div>
                
    </Container>
      </div>
               
      );
    }
  
  }


export default Home