import { Button } from '@material-ui/core';
import React from 'react';
//import { connect } from 'react-redux'

const SignedOutLinks = () => {
  return (
    <div>
      <Button href='/signin'>Log In</Button>
      <Button href='/signup'>Sign In</Button>
    </div>
  )
}

export default SignedOutLinks
