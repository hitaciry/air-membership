import { updateOpprortunity, getOpprortunity, getOpprortunities } from "../../gisApi/opportunities";

export const UpdateOpportunity= (opportunity)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    updateOpprortunity(opportunity).then(()=>{
    dispatch({
      type:'UPDATE_OPPORTUNITY',
      opportunity:opportunity,
    })
    }).catch(console.log);
  }
}
export const GetOpportunity= (id)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    getOpprortunity(id).then((opportunity)=>{
    dispatch({
      type:'GET_OPPORTUNITY',
      opportunity:opportunity,
    })
    }).catch(console.log);
  }
}

export const GetOpportunities= (page)=>{
  return (dispatch, getState,{getFirestore, getFirebase}) => {
    getOpprortunities(page).then((opportunities)=>{
    dispatch({
      type:'GET_OPPORTUNITIES',
      opportunities:opportunities,
    })
    }).catch(console.log);
  }
}