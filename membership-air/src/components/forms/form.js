import React, { Component } from 'react'
import FormField from './formField'
import PropTypes from 'prop-types';

class Form extends Component {
  
  render(){
    const {fields}= this.props;
    return (<div>
      {fields?fields.map(element => {
        return <FormField {...element}/>
      }):"Form is empty"}
      </div>
    );
  }
}

Form.propTypes ={
  fields: PropTypes.arrayOf( PropTypes.shape( {...FormField.propTypes}))
}

export default Form;