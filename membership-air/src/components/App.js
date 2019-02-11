import React, { Component } from 'react'
import Form from './forms/form';
import './App.css';
import NavBar from './navbar/navbar';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './style/theme';
import ProjectDetails from './projects/projectDetails';
import Projects from './projects';
import Opportunities from './opportunities/opportunities';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider theme={theme} >
        <NavBar />
        <div className="content">
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route exact path='/projects' component={Projects}/>
          <Route path='/opportunities' component={Opportunities}/>
        </Switch>
        </div>
      </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
