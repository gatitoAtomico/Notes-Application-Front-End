import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Container, Col, TextArea} from 'reactstrap';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
          'message' : '',
        };
    
      console.log(this.props.User);
      }

    render() {

        if(this.props.User){

            let error = '';
    
            if(this.state.message){
    
                error = (
                    <div className="alert alert-danger" role="alert">
                         {this.state.message}
                    </div>
                )
            }


            return (
                <div>
                <Container>
                <form onSubmit={this.handleSubmit}>
         
                       <h3>This is user profile</h3>
         
               </form>
               </Container>
          </div>
         
               );
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

export default Profile;
