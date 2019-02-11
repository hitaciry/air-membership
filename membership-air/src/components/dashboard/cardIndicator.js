import { Button, Card, CardContent, CardHeader, Chip, Collapse, IconButton, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';

const countUnify=(item, color)=>{
  if(item.applicants)
    return <Chip className={color} label={item.applicants.value}/>
  if(item.unique_profiles)
    return <Chip className={color} label={item.unique_profiles.value}/>
  return <Chip className={color} label={item.doc_count}/>
}

class CardIndicator extends Component {
  state={collapsed:false}

  handleExpandClick = () => {
    this.setState(state => ({ collapsed: !state.collapsed }));
  };

  render(){
    const {color, element, name, children} = this.props;
    return (
      <Card elevation={1} raised={false} style={{minWidth:320, margin:5}}>
      <CardHeader
        action={
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.collapsed}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={
          <div><Button><b>{name}</b></Button>{countUnify(element,color)}</div>
        }
      />
      <Collapse in={this.state.collapsed} timeout="auto" unmountOnExit>
        <CardContent>
            <Table>
              <TableBody>
                {children.filter(f=>f.value.doc_count)
                  .sort((f,s)=>s.value.doc_count-f.value.doc_count)
                  .map(c=>
                    <TableRow key={c.name}>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{countUnify(c.value, color)}</TableCell>
                    </TableRow>
                  )}
              </TableBody>
            </Table>

        </CardContent>
      </Collapse>
      </Card>)
  }
}
  export default  CardIndicator;