import analytics from "../examples/analytics";

const initState=analytics

const analyticsReducer=(state={fetching:false}, action)=>{
  switch (action.type) {
    case "LOAD_ANALYTICS":
      return{
        lastUpdate:action.lastUpdate, result:action.analytics, fetching:false
      }
    case "FETCHING_ANALYTICS":
      return{ ...state,
        fetching:action.fetching 
      }
    default:
      break;
  }
  return state;
}

export default analyticsReducer;