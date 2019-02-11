import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';

export default class AddFormField extends Component {
  constructor(props){
    super(props);
    this.state= {
      "Field name":"",
      "Field value":""
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit=()=>{
    this.props.onSubmit({name:this.state["Field name"],value:this.state["Field value"]})
  }
  formValidation=()=>this.state["Field name"]!=="";
  render() {
    return (
      <div>            
    <TextField
      id="Field name"
      label="Field name"
      value={this.state.formId}
      onChange={this.handleChange('Field name')}
      margin="dense"
      variant="outlined"
    />
    <TextField
      id="Field value"
      label="Field value"
      value={this.state.formId}
      onChange={this.handleChange('Field value')}
      margin="dense"
      variant="outlined"
    />
    <Button 
      disabled={!this.formValidation()}
      onClick={this.handleSubmit} color="primary">
      Add
    </Button>
      </div>
    )
  }
}
