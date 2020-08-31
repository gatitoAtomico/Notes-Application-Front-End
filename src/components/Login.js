import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from "react-router-dom";
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap'; 

class Login extends Component {

    constructor(props) {

        super(props);
        this.state = {
            loggedIn : false
        }

    }


    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email : this.email,
            password : this.password,
         
        }


        axios.post('login', data).then (

        res => {

            localStorage.setItem('token',res.data.token);
            this.setState({
                loggedIn: true

            });

            this.props.setUser(res.data.user);
        
             }).catch(
                err => {
                   this.setState({ message: err.response.data.message })
                }
            )
    }

    render() {

        if(this.state.loggedIn){
            return <Redirect to={'/'} />
        }
        
        let error = '';

        if(this.state.message){

            error = (
                <div className="alert alert-danger" role="alert">
                     {this.state.message}
                </div>
            )
        }


      return (

        <Container>
               <Form className = "loginRegister-form" onSubmit={this.handleSubmit}>
               {error}
               <h2>Login</h2>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" placeholder="PLease enter your email" onChange = {e => this.email = e.target.value} required></Input>
                        </FormGroup>
                        <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="PLease enter your password"  onChange = {e => this.password = e.target.value} required></Input>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block">Log in</Button>
                    <div className = "text-right"> 
                    <p className="forgot-password text-right"> <Link to= {'/forgot'}>Forgot Password?</Link></p>
                    </div>
                </Form>
           </Container>
       
      );
    }
  }


export default Login