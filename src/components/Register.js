import React, { Component } from 'react';
import axios from 'axios';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap'; 


class Register extends Component {

    state = {}

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name : this.name,
            email : this.email,
            password : this.password,
            password_confirm : this.confirmPassword
        }

        axios.post('register', data).then (

        res => {
            console.log(res);
            }).catch(
                err => {
                    this.setState({ message: err.response.data.message })
                 }
            )
    }

    render() {

        let error = '';

        if(this.state.message){

            error = (
                <div className="alert alert-danger" role="alert">
                     {this.state.message}
                </div>
            )
        }

      return (
        <Form className = "loginRegister-form" onSubmit={this.handleSubmit}>
           {error}
           <h2>Register</h2>
                <div class="container">
                    <div class="form-row">
                    <div className="form-group col-md-12">
                        <label>Name</label>
                        <Input type="text" placeholder="PLease enter your Name" onChange = {e => this.name = e.target.value} required></Input>
                        <label>Email</label>
                        <Input type="email" placeholder="PLease enter your Email" onChange = {e => this.email = e.target.value} required></Input>
                        <label>Password</label>
                        <Input type="password" placeholder="PLease enter your password"  onChange = {e => this.password = e.target.value} required></Input>
                        <label>Confirm Password</label>
                        <Input type="password" placeholder="PLease confirm Password"  onChange = {e => this.confirmPassword = e.target.value} required></Input>           
                </div>
            </div>
            <Button className="btn-lg btn-dark btn-block">Register</Button>
            </div>
          </Form>

      );
    }
  }

export default Register