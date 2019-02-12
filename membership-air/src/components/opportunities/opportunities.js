import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardView from './cardView';
import EditOppoerunity from "./editOppoerunity";
import { GetOpportunity,GetOpportunities, UpdateOpportunity } from '../../store/actions/opportunityActions';

export class Opportunities extends Component {

  componentDidMount() {
    if(!this.props.opportunities){
      this.props.getNextOpportunities(1);
    }
    document.addEventListener('scroll', this.trackScrolling);
  }
  componentDidUpdate(){
    document.addEventListener('scroll', this.trackScrolling);

  }
  trackScrolling = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
      if(this.props.opportunities&&this.props.paging.current_page!=this.props.paging.total_page){
        this.props.getNextOpportunities(this.props.paging.current_page+1);
        document.removeEventListener('scroll', this.trackScrolling);
      }
    }
  };
  render() {
    const {opportunities,opportunity, updateOpportunity, getOpportunity,discardOpportunity } = this.props
    return (
      <div id="opportunities">
        <EditOppoerunity opportunity={opportunity} updateOpportunity={updateOpportunity} onClose={discardOpportunity}/>
        {opportunities?<Grid container spacing={32} justify="center" alignItems="flex-start" >
          {opportunities.map(opportunity=><CardView key={opportunity.id} opportunity={opportunity} onClick={getOpportunity}/>)}
        </Grid>:<CircularProgress/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  opportunities:state.opportunities.opportunities,
  opportunity:state.opportunities.opportunity,
  paging:state.opportunities.paging
})

const mapDispatchToProps =(dispatch)=> {
  return {
  getNextOpportunities: (page)=>{return dispatch(GetOpportunities(page))},
  getOpportunity:(id)=>{return dispatch(GetOpportunity(id))},
  updateOpportunity:(opportunity)=>{return dispatch(UpdateOpportunity(opportunity))},
  discardOpportunity:()=>dispatch({type:"DISCARD_OPPORTUNITY"})
}}

export default connect(mapStateToProps, mapDispatchToProps)(Opportunities)
