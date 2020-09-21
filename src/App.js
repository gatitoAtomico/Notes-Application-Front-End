import './App.css';
import './css/index.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import React, {Component, Profiler} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import axios from 'axios';
import Forgot from './components/Forgot';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

 export default class App extends Component {

  
  constructor(props) {

    super(props);
    this.state = {
        User : null,
        Posts: null,
        Dummy: null
    }

}

 //runs before render method runs 
 componentDidMount = () =>{

  axios.get('userDetails').then(
    res => {
      this.setUser(res.data.user,res.data.posts);
      console.log(res);
    },
    err => {
      console.log(err);
    }
  )
};
 
 setUser = (user, posts) => {
  this.setState({
    User: user, 
    Posts: posts
  });
 };

  render() {
  return (

    <div>
      <BrowserRouter>
            <div className="App">
            <Navigation User = {this.state.User} setUser={this.setUser} />
        <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
               <Route exact path="/login" component = { () => <Login setUser = {this.setUser} />} />
               <Route exact  path="/register" component = {Register} />
               <Route exact path="/forgot" component = {Forgot} />
               <Route exact path="/profile" component = { () => <Profile User={this.state.User}  />} />
               <Route exact path="/" component= { () => <Home setUser = {this.setUser} User = {this.state.User} />} />
             </Switch>

                </div>
            </div>
            </div>
    </BrowserRouter>
    </div>
    
  );
}
 }



