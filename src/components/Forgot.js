import React, { Component } from 'react';

class Forgot extends Component {

    handleSubmit = e => {

        e.preventDefault();
    };

    render() {

      return (
       <form onSubmit={this.handleSubmit}>

              <h3>Forgot Password</h3>

                <div class="container">
                    <div class="form-row">
                    <div class="form-group col-md-12">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email"
                        onChange = {e => this.email = e.target.value}/>
                          
                    </div>
                </div>
                <button class="btn btn-primary btn-block">Submit</button>
            </div>
      </form>

      );
    }
}

export default Forgot;
