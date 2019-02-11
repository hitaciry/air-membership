

const opportunitiesReducer=(state={opportunity:null}, action)=>{
  switch (action.type) {
    case "GET_OPPORTUNITIES":
      return{
        opportunities:state.opportunities?
          [...state.opportunities,...action.opportunities.data]:
          [...action.opportunities.data],
        paging:action.opportunities.paging
      }
    case "GET_OPPORTUNITY":
      return{ ...state,
        opportunity:action.opportunity
      }
    default:
      break;
  }
  return state;
}

export default opportunitiesReducer;