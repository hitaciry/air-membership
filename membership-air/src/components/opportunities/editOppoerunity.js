import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class EditOppoerunity extends Component {
  constructor(props) {
    super(props)
    if(props.opportunity) {
      this.state = {
        title:props.opportunity.title,
        description:props.opportunity.description,
        open:true
      }
    } else{
      this.state = {
        title:"",
        description:"",
        open:false
      }
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    const props=this.props

    if(props.opportunity&&prevProps.opportunity!==props.opportunity) {
      this.setState({
        title:props.opportunity.title,
        description:props.opportunity.description,
        open:true
      })
    }
  }
  
  handleClose=()=>{
    this.setState({open:!this.state.open})
    this.props.onClose()
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit=(e)=>{
    e.preventDefault();
    const opportunity={...this.props.opportunity,title:this.state.title,description:this.state.description};
    console.log(opportunity)
    this.props.updateOpportunity(opportunity);
  } 
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          fullWidth={true}

        >
        <DialogTitle>
          Update opportunity
        </DialogTitle>
        <DialogContent>
          <TextField
            label="title"
            value={this.state.title}
            onChange={this.handleChange("title")}
            fullWidth
          ></TextField>
          <br/>
          <TextField
            multiline
            label="description"
            value={this.state.description}
            onChange={this.handleChange("description")}
            fullWidth 
            
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}> Close</Button>
          <Button color="primary" onClick={this.handleSubmit}> Submit</Button>
        </DialogActions>
        </Dialog>
        
      </div>
    )
  }
}
