import React, { Component } from 'react'
import PropTypes from 'prop-types';
import OpenModalButton from '../wrappers/openModalButton';
import AddFormField from './addFormField';
import { DialogContent ,DialogTitle, TextField} from '@material-ui/core';

class CreateForm extends Component {
  constructor(props){
    super(props);
    this.state= {form:this.props.form||{}};
  }
  handleClose=()=>this.setState({open:!this.state.open})
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit=()=>(e)=>{
    e.preventDefault();
    const {open,...item}=this.state;
    this.props.onSubmit(item);
    this.handleClose();
  }
  handelAddField=({name,value})=>{
    this.setState({
      [name]: value
    });

  }
  formValidation=()=>this.props.requiredFields.every(f=>this.state.form[f]!=="");
  render() {
    const {form}= this.state;
    const {title,requiredFields, onSubmit} = this.props;

    return (
        <OpenModalButton onClose={this.handleClose}
                         onOpen={this.handleClose}
                         onSubmit={this.handleSubmit}
                         isOpen={this.state.open} 
                         buttonLabel={title}
                         >
                         <DialogTitle>{title}</DialogTitle>
                         <DialogContent>
                         {Object.keys(form).map((key)=>{
                           <TextField key={key}
                            id={key}
                            label={key}
                            value={form[key]}
                            required={requiredFields&&requiredFields.includes(key)}
                           />
                         })}
                          <AddFormField 
                           onSubmit={(value,name)=>
                            this.setState({form:{[name]:value}})}/>
                            </DialogContent>
        </OpenModalButton>
    )
  }
}
CreateForm.propTypes ={
  onSubmit: PropTypes.func.isRequired,
  form:PropTypes.object,
  title:PropTypes.string,
  requiredFields:PropTypes.arrayOf(PropTypes.string)
}
export default CreateForm