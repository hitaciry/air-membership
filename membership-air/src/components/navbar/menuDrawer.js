import React from 'react'
import { Drawer, IconButton, Divider, List} from '@material-ui/core';
import { ChevronLeft, Dashboard, InsertInvitation, GroupWork, Work } from '@material-ui/icons';
import ListItemWithLink from '../wrappers/listItemWithLink';

export default function MenuDrawer({open,onClose, anchor}) {
  return (
    <Drawer 
    variant="persistent"
    anchor={anchor}
    open={open}>
    <div className="color-prime" style={{display:"flex",alignItems: 'center',justifyContent:"flex-end"}}>
      <IconButton onClick={()=>onClose()} color="inherit">
        <ChevronLeft/>
      </IconButton>
    </div>
      <Divider/>
      <List>
        <ListItemWithLink primary="Projecs" to="/projects" icon={<Work/>}/>
        <ListItemWithLink primary="Dashboard" to="/" icon={<Dashboard/>}/>
        <ListItemWithLink primary="Tasks" to="/tasks" icon={<InsertInvitation/>}/>
        <ListItemWithLink primary="LCs" to="/LCs" icon={<GroupWork/>}/>
      </List>
    </Drawer>
  )
}
