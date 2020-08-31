import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

class Navigation extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);

    };

    render() {

        //why let?
        let buttons;
        
        if (this.props.User) {



          //{this.props.User.name}
            buttons = ( 
  
             <Dropdown>
              <Dropdown.Toggle variant="secondary">
              Log in as : {this.props.User.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item  to={'/'} onClick = {this.handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 

          );

        } else {

          buttons = ( <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to={'/login'}>Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/register'}>Register</Link>
            </li>
        </ul>
          );
       
    }

      return (
        <div>
            <nav class="navbar fixed-top navbar-expand navbar">
                    <a href="#" class="navbar-brand">Brand</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                        <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                        </div>
                        <div class="navbar-nav ml-auto">
                        {buttons}
                        </div>
                    </div>
                </nav>
       </div>        
      );
    }
  }


export default Navigation