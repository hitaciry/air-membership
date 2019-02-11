import React from 'react'
import { GridList, Button } from '@material-ui/core';
import ExpandList from '../wrappers/expandList';

 const TaskList =({formId,userId,taskId,tasks, title})=> {
  return (
    <ExpandList items={tasks} 
                itemKey={(item)=>item.id}
                titleFn={(item)=>item.title||item['ФИО']||item.id}
                bodyFn={(item)=> Object.keys(item).map((key,i)=>
                  <p key={key}>{key}:{item[key]}</p>
                )}
                actionsFn={(item)=>[<Button href={`/task/${item.id}`} >Details</Button>]}/>
  )
}

export default TaskList