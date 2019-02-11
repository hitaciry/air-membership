import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormField extends Component {

  render(){
    const {type, value,name}= this.props;
    return (
      <div className="form-group">
      <label>{name}</label>
      <input type={type} value={value}/>
      </div>
    );
  }
}
FormField.propTypes={
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  name: PropTypes.string.isRequired
}
export default FormField;