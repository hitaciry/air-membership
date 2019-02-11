import React, { Component } from 'react'
import {  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import  ExpandMore from '@material-ui/icons/ExpandMore'
class TaskView extends Component {
  
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render(){
    const {title,Id, task}=this.props;
    return (  
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMore/>}>{title||task['ФИО']||task.id}</ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {Object.keys(task).map((key,i)=>
            <p key={key}>{key}:{task[key]}</p>
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
export default TaskView