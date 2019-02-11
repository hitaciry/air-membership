import { Button, DialogContent, TextField, DialogActions,DialogTitle, DialogContentText } from '@material-ui/core';
import React, { Component } from 'react';
import OpenModalButton from '../wrappers/openModalButton';

class CreateProject extends Component {

  constructor(props){
    super(props);
    this.state= this.props.project || {
      title: "",
      description:"",
      open:false
    };
  }
  handleClose=()=>this.setState({open:!this.state.open})
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit=()=>(e)=>{
    e.preventDefault();
    const {open,...project}=this.state;
    this.props.createProject(project);
    this.handleClose();
  }

  formValidation=()=>this.state.title==="";
  render() {
    return (
      <OpenModalButton 
      buttonLabel="Create project"
      onOpen={()=>this.setState({open:!this.state.open})}
      onClose={()=>this.setState({open:!this.state.open})}
      isOpen={this.state.open}
      >
      <DialogTitle id="draggable-dialog-title">Create new project</DialogTitle>
          <DialogContent>
            <DialogContentText>
             fill in project info below
            </DialogContentText>
            <TextField
            id="title"
            label="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange('title')}
            margin="dense"
            variant="outlined"
          />
          <TextField
            id="description"
            label="description"
            multiline
            fullWidth={true}
            value={this.state.description}
            onChange={this.handleChange('description')}
            margin="dense"
            variant="outlined"
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button 
              disabled={this.state.title===""}
              onClick={this.handleSubmit()} color="primary">
              Save
            </Button>
          </DialogActions>
      </OpenModalButton>
    )
  }
}

export default CreateProject