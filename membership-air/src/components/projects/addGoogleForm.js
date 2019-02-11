import { Button, DialogContent, TextField, DialogActions, DialogTitle,DialogContentText} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenModalButton from '../wrappers/openModalButton';

class AddGoogleForm extends Component {
  state={
    formId:"",
    isOpen:false
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit=()=>(e)=>{
    e.preventDefault()
    const projectId= this.props.projectId
  }
  formValidation=()=>this.state.formId!=="";
  render() {
    return (
      <OpenModalButton 
        onClose={()=>this.setState({isOpen:false})}
        onOpen={()=>this.setState({isOpen:true})}
        isOpen={this.state.isOpen}
        buttonLabel="Link form"
        >
          <DialogTitle id="draggable-dialog-title">Link to google sheet form responses</DialogTitle>
          <DialogContent>
            <DialogContentText>
              For linking with google form responses, please, ad AiR add-on to the google table, then put the sheet id(from the url) to the field below
            </DialogContentText>
            <TextField
              id="formId"
              label="formId"
              type="text"
              value={this.state.formId}
              onChange={this.handleChange('formId')}
              margin="dense"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.setState({isOpen:false})} color="primary">
              Cancel
            </Button>
            <Button 
              disabled={!this.formValidation()}
              onClick={this.handleSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
          </OpenModalButton>
    )
  }
}

const mapDispatchToProps =(dispatch)=> {
  
}

export default connect(null,mapDispatchToProps)(AddGoogleForm)