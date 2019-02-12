

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
    case "DISCARD_OPPORTUNITY":
      return{ ...state,
        opportunity:null
      }
    case "UPDATE_OPPORTUNITY":
      return{ ...state,
        opportunity:null,
        opportunities:state.opportunities&&state.opportunities.map(opportunity=>{
         return opportunity.id === action.opportunity.id?
          {...opportunity,title:action.opportunity.title }
          :opportunity 
        })
      }
    default:
      break;
  }
  return state;
}

export default opportunitiesReducer;