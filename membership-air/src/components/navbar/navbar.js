import React, { Component } from 'react'
import { compose } from 'redux';
import SignedInLinks  from "./signedInLinks";
import SignedOutLinks from './signedOutLinks';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar,Typography, IconButton, withWidth, Hidden } from '@material-ui/core';
import { connect } from 'react-redux';
import { Menu } from '@material-ui/icons';
import MenuDrawer from './menuDrawer';

class NavBar extends Component {
  state = {
    open: false,
    anchor:"left"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render(){
    const  {user, width} =this.props
    console.log(width)
    const anchor=width==="sm"||width==="xs"?"right":"left"
    return (
      <div>
        <AppBar style={{flexGrow:1}} position="static">
          <Toolbar>
            <Hidden  xsDown >
              <IconButton color="inherit" onClick={this.handleDrawerOpen}>
                <Menu/>
              </IconButton>
            </Hidden>
            <Typography variant="h6" color="inherit" style={{flexGrow:1, textAlign:'left' }}>
              AiR
            </Typography>
            {user?
              <SignedInLinks user={user} />:
              <SignedOutLinks/>}
              
            <Hidden  smUp >
            <IconButton color="inherit" onClick={this.handleDrawerOpen}>
              <Menu/>
            </IconButton>
          </Hidden>
          </Toolbar>
        </AppBar>
        <MenuDrawer open={this.state.open} onClose={this.handleDrawerClose} anchor={anchor}/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({user:state.auth.currentUser})

export default compose(withWidth(), connect(mapStateToProps))( NavBar)
