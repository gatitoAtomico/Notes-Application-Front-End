import React, { Component } from 'react';
import axios from 'axios';


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
       <form onSubmit={this.handleSubmit}>
           {error}
           <h3>Register</h3>
                <div class="container">
                    <div class="form-row">
                    <div className="form-group col-md-12">
                        <label>Name</label>
                        <input type="text" class="form-control"  placeholder="Name"
                        onChange = {e => this.name = e.target.value} required/>
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email"
                        onChange = {e => this.email = e.target.value} required/>
                    
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"
                        onChange = {e => this.password = e.target.value} required/>
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" placeholder="Confirm Password"
                        onChange = {e => this.confirmPassword = e.target.value} required/>             
                </div>
            </div>
              <button class="btn btn-primary btn-block">Register</button>
            </div>
          
      </form>

      );
    }
  }

export default Register