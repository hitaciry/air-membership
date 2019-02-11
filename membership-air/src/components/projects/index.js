import React from 'react'
import CreateProject from './create';
import ProjectList from './projectList';
import { connect } from 'react-redux'
import { compose } from 'redux';
import {CreateProject as Create} from '../../store/actions/projectsActions'
import { firestoreConnect } from 'react-redux-firebase'


const Projects= ({projects,createProject}) => {
  return (
    <div>
      <CreateProject createProject={createProject}/>
      <br/>
      {projects?<ProjectList projects={projects}/>:<p> no data</p>}
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    projects:state.firestore.ordered.Projects
}}
const mapDispatchToProps =(dispatch)=>( {
  createProject:(project)=>dispatch(Create(project))
})

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect(()=>['Projects']),
) (Projects)