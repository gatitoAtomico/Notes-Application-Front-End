import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Container, Col} from 'reactstrap'; 
import Sidebar from './SideBar';




class Home extends Component {

    render() {
  
      if(this.props.User){
        //console.log('those are the porps',this.props.user);
      return (
    
        <div>
        <Sidebar/>
        <Container fluid>
        <div className= "home-form">
          <div className ="row">
            <div className= "col-md-6">
              <div className="card">
                  <div className = "card-header">
                      Header
                  </div>
                <div className="card-body">
                  hello
                </div>
              </div>
              </div>
              <div className= "col-md-6">
              <div className="card">
                  <div className = "card-header">
                     Header
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