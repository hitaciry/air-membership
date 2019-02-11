import { Avatar, Button } from '@material-ui/core';
import React from 'react';

const SignedInLinks = ({user}) => {
  const nameLeters=user.firstName.charAt(0)+user.lastName.charAt(0);
  const color ="gradient"+Math.floor(Math.random() * 3+1);
  return (
    [
      <Button href='/' color='inherit' >Log Out</Button>,
      <Button href='/'  color='inherit'>
        <Avatar className={color}>{nameLeters}
      </Avatar></Button>,
    ]
  )
}

export default SignedInLinks
