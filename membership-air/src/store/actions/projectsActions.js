export const CreateProject=(project)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    const firestore= getFirestore();
    firestore.collection('Projects').add(project).then(({id})=>{
    dispatch({
      type:'CREATE_PROJECT',
      project:{...project, id},
    })
    }).catch(err=>console.log);
  }
}
export const UpdateProject=(project)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    const firestore= getFirestore();
    firestore.collection('Projects/'+project.id).update(project).then(({id})=>{
    dispatch({
      type:'UPDATE_PROJECT',
      project:{...project, id},
    })
    }).catch(err=>console.log);
  }
}

export const GetProjects=()=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    // make async call to database
    let projects;
    dispatch( {
      type:'GET_PROJECTS',
      projects
    })
  }
}

export const DeleteProjects=(id)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    // make async call to database
    dispatch( {
      type:'DELETE_PROJECT',
      id
    })
  }
}

export const GetProject=(id)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    // make async call to database
    dispatch( {
      type:'GET_PROJECT',
      id
    })
  }
}