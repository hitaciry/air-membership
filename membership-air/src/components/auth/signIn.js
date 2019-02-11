import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React, { Component } from 'react';

export default class SignIn extends Component {
  state = {
    email: "",
    password:"",
    emailValid:true,
    passwordValid:true,
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
      default:
        break;
    }
    this.setState({
      [name]: event.target.value,
      [name+'Valid']:value,
    });
  };
  handleSubmit=()=>(e)=>{

  }
  formValidation=()=> !((this.state.email !== "") && (this.state.password !== "")
   && this.state.emailValid && this.state.passwordValid);
  render() {
    return (
      <Paper className='paper-md'>
          <form onSubmit={this.handleSubmit()}>
          <Grid container spacing={8} direction="column" justify="center" alignItems="center">
            <Grid item xs>
              <h5>Sign In</h5>
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
                disabled={this.formValidation()}
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
