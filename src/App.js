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
import Sidebar from './components/SideBar';

 export default class App extends Component {

  
  constructor(props) {

    super(props);
    this.state = {
        User : null,
        Categories : [] ,
        Posts: []
    }

}

 //runs before render method runs 
 componentDidMount = () =>{

  axios.get('user').then(
    res => {
      this.setUser(res.data);
    },
    err => {
      console.log(err);
    }
  )
};

 setUser = (user) => {

  this.setState({
    User: user
  });
 };

  render() {
  return (

    <div>
      <BrowserRouter>
            <div className="App">
            <Navigation User = {this.state.User}  setUser={this.setUser}/>
        <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
               <Route  path="/login" component = { () => <Login setUser = {this.setUser} />} />
               <Route  path="/register" component = {Register} />
               <Route  path="/forgot" component = {Forgot} />
               <Route  path="/profile" component = { () => <Profile User = {this.state.User} />} />
               <Route exact path="/" component= { () => <Home User = {this.state.User} />} />
             </Switch>

                </div>
            </div>
            </div>
    </BrowserRouter>
    </div>
    
  );
}
 }



