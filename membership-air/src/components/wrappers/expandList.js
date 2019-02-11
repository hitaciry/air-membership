import React,{Component} from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Button } from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons'

class ExpandList extends Component {
  
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render(){
    const { items,itemKey,titleFn,bodyFn,actionsFn}= this.props
    return (
      <div>
        {items.map(item=>
          <ExpansionPanel key={itemKey(item)} 
                          expanded={this.state.expanded === itemKey(item)} 
                          onChange={this.handleChange(itemKey(item))}>
            <ExpansionPanelSummary expandIcon={<ExpandMore/>} >
            {titleFn(item)}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {bodyFn(item)}
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
              {actionsFn(item)}
            </ExpansionPanelActions>
          </ExpansionPanel>
        )}
      </div>
    )
  }
}

export default ExpandList
