const initState=[{
  title:'first task',
  content:'bla bla vla',
  state:'new'
}]

const tasksReducer=(state=initState, action)=>{
  switch (action.type) {
    case "LOAD_TASKS":
      return action.tasks
    case "CREATE_TASK":
      return [...state, action.task]
  
    default:
      break;
  }
  return state;
}

export default tasksReducer;