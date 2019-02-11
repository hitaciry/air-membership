import React from 'react'
import AddGoogleForm from './addGoogleForm';
import TaskList from '../tasks/taskList';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core';
import { CreateTask } from '../../store/actions/tasksActions';
import CreateForm from '../forms/createForm';

const ProjectDetails= ({formId,Id,title,addTask,tasks})=> {
    return (
      <Card>
      <CardContent>
        <h2>{title}</h2>
        <Divider/>
        {tasks&&<TaskList tasks={tasks} />}
      </CardContent>
      <CardActions>
      <AddGoogleForm projectId={Id}/>
      <CreateForm onSubmit={(task)=>addTask(task,Id)}
                  form={{title:"",description:""}}
                  requiredFields={["title"]}
                  title='Create task' />
      </CardActions>
      </Card>
    )
}

const mapStateToProps = (state,props) => {
  console.log(state.firestore)
  const id =props.match.params.id;
  const project=state.firestore.data.Projects? state.firestore.data.Projects[id]:{}
  const tasks=state.firestore.ordered.Tasks?
              state.firestore.ordered.Tasks
                .filter(t=>t.formId&&t.formId===project.formId||
                           t.Project&&t.Project.id=== id):[]
  return { ...project, tasks:tasks}
}
const mapDispatchToProps = (dispatch)=>({
  addTask:(task,projectId)=>dispatch(CreateTask(task, projectId))
})

export default compose(
connect(mapStateToProps,mapDispatchToProps),
firestoreConnect(()=>['Projects','Tasks']),
)(ProjectDetails)
