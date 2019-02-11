const initState={projects:{projectList:[{
  title:'first project',
  content:'bla bla vla',
  state:'new'
}]}}

const projectsReducer=(state=initState, action)=>{
  switch (action.type) {
    case "GET_PROJECTS":
      return {projectList:action.projects,...state}
    case "CREATE_PROJECT":
      return {...state, projectList:[...state.projects.projectList, action.project]}
    
    default:
      break;
  }
  return state;
}

export default projectsReducer;