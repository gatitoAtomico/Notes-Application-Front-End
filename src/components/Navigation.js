import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import Forgot from '../components/Forgot';


class Navigation extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null,null);
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
              <Dropdown.Item><Link className="nav-link" to={'/profile'}>Profile</Link></Dropdown.Item>
              <Dropdown.Item to={'/'} onClick = {this.handleLogout}>Logout</Dropdown.Item>
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
            <nav className ="navbar fixed-top navbar-expand navbar">
                    <a href="#" className ="navbar-brand">Brand</a>
                    <button type="button" className ="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className ="navbar-toggler-icon"></span>
                    </button>

                    <div className ="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                        <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                        </div>
                        <div className ="navbar-nav ml-auto">
                        {buttons}
                        </div>
                    </div>
                </nav>
       </div>        
      );
    }
  }


export default Navigation