import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Link } from "react-router-dom";

const ListItemWithLink=({primary, icon, to} )=> {
  return (
      <ListItem button component={Link} to={to} data-next="true">
        {icon&&<ListItemIcon>{icon}</ListItemIcon>}
        {primary&&<ListItemText primary={primary} />}
      </ListItem>
  );
}

export default ListItemWithLink