import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Container, Col, TextArea} from 'reactstrap'; 
import axios from 'axios';
import Sidebar from './SideBar';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
  
      'posts' : []
    };

     this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
      e.preventDefault()
      //console.log(this.state.body)

      const data = {
        post : this.post,   
      }

      axios.post('createPost', data).then (

        res => {

          console.log(res.data.post.body)

          this.setState({

            posts: [...this.state.posts, res.data.post]
           
          });

             }).catch(
                err => {
                   this.setState({ message: err.response.data.message })
                }
            )

            //clear post body
            e.target.reset();
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
        <Container fluid>
        <div className= "home-form">
          <div className ="row">
            <div className= "col-md-6">
              <div className="card">
              <div class="card bg-dark text-white">
                  <div className = "card-header">
                      Tweet something...
                  </div>
                  {error}
                    <div className="card-body">
                      <Form onSubmit= {this.handleSubmit}>
                        <div className="form-group">
                          <textarea onChange = {e => this.post = e.target.value} className="form-control" rows="5" 
                        maxLength="140" placeholder="Whats up?" required/>
                          </div>
                          <Button className="btn-lg btn-info btn-block">Submit</Button>
                      </Form>
                    </div>
                </div>
              </div>
              </div>
              <div className= "col-md-6">
              <div className="card">
              <div class="card bg-secondary text-white">
                  <div className = "card-header">
                     Recent tweets
                  </div>
                <div className="card-body">

                {this.state.posts.map(post => <div key={post.id}>{post.body}</div>)}
                </div>
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