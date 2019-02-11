export const CreateTask=(task, projectId,userId, taskId)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    const firestore= getFirestore();
    let newTask={...task}
    if(projectId){
      newTask.Project=firestore.doc(`Projects/${projectId}`)
    }
    if(userId){
      newTask.Owner=firestore.doc(`Users/${userId}`)
    }
    if(projectId){
      newTask.ParantTask=firestore.doc(`Tasks/${taskId}`)
    }
    firestore.collection('Tasks').add(newTask).then(({id})=>{
      dispatch( {
        type:'CREAT_TASK',
        task:{...newTask,id}
      })
    }).catch(err=>console.log);
  }
}

export const GetTasks=()=>{
  return (dispatch, getState) => {
    // make async call to database
    dispatch( {
      type:'GET_TASKS',
      //Tasks
    })
  }
}

export const DeleteTasks=(id)=>{
  return (dispatch, getState) => {
    // make async call to database
    dispatch( {
      type:'DELETE_TASK',
      //tasks
    })
  }
}

export const GetTask=(id)=>{
  return (dispatch, getState) => {
    // make async call to database
    dispatch( {
      type:'GET_TASK',
      //currentTask
    })
  }
}