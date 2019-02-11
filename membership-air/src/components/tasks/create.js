import { Button, Grid, TextField, Paper , DialogTitle, DialogContentText} from '@material-ui/core';
import React, { Component } from 'react';

export default class CreateTask extends Component {

  constructor(props){
    super(props);
    this.state= this.props || {
      title: "",
      description:"",
      open:false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit=()=>(e)=>{
    const {open, ...task}=this.state;
    this.props.creatTask(task)
  }
  formValidation=()=>this.state.title!=="";
  render() {
    return (
        <CreateForm title="Create form" form={{title:"", desciption:"", state:"new"}} />
    )
  }

  
}
