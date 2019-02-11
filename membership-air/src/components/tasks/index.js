import React from 'react'
import TaskList from './taskList';
import OpenModalButton from '../wrappers/openModalButton';

const Tasks= () => {
  return (
    <div>
    <OpenModalButton on />
      <TaskList/>
      
    </div>
  )
}


const mapStateToProps = (state) => ({
  tasks:state.tasks
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)