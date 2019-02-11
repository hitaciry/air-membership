import React, { Component } from 'react'
import { TextField, Grid, Button, Paper } from '@material-ui/core';

export default class SignUp extends Component {
  state = {
    email: "",
    password:"",
    firstName:"",
    lastName:"",
    emailValid:true,
    passwordValid:true,
    firstNameValid:true,
    lastNameValid:true,
  };

  handleChange = name => event => {
    let value;
    switch (name) {
      case "email":
           value=event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?true:false
        break;
    
        case "password":
           value =event.target.value.length>=8
        break;
        case "firstName":
           value =event.target.value.length>=1
        break;
        case "lastName":
           value =event.target.value.length>=1
        break;
      default:
        break;
    }
    this.setState({
      [name]: event.target.value,
      [name+'Valid']:value,
    });
  };
  handleSubmit=()=>(e)=>{
e.preventDefault();
  }
  
  formValid=() =>!((this.state.email !== "") && (this.state.password !== "") 
  && this.state.emailValid && this.state.passwordValid);
  
  render() {
    return (
      <Paper >
          <form onSubmit={this.handleSubmit()}>
          <Grid container spacing={8} direction="column" justify="center" alignItems="center">
            <Grid item xs>
              <h5>Sign Up</h5>
            </Grid>
            <Grid item xs>
            <TextField
            error={!this.state.firstNameValid}
              id="firstName"
              label="firstName"
              type="firstName"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
              margin="dense"
              variant="outlined"
            />
            </Grid>
            <Grid item xs>
            <TextField
            error={!this.state.lastNameValid}
              id="lastName"
              label="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
              margin="dense"
              variant="outlined"
            />
            </Grid>
             <Grid item xs>
            <TextField
            error={!this.state.emailValid}
              id="email"
              label="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="dense"
              variant="outlined"
            />
            </Grid>
            <Grid item xs>
            <TextField
              error={!this.state.passwordValid}
              id="password"
              label="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="dense"
              variant="outlined"
            />
            </Grid>
            <Grid item xs>
              <Button  
                disabled={this.formValid()}
                 variant="outlined"
                 color="primary"
                 size="medium"
                 type="submit"
              >Submit</Button>
            </Grid>
          </Grid>
          </form>
          </Paper>
          )
  }

}
