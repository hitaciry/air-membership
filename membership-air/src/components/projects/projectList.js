import React from 'react'
import ExpandList from '../wrappers/expandList';
import { Button } from '@material-ui/core';

const ProjectList =({projects})=> {
  return (
    <ExpandList items={projects} 
                itemKey={(item)=>item.id}
                titleFn={(item)=>item.title}
                bodyFn={(item)=>item.description}
                actionsFn={(item)=><Button href={`/project/${item.id}`} >Details</Button>}/>
  )
}


export default ProjectList
