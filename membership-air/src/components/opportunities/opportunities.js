import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core';
import CardView from './cardView';
import { GetOpportunity,GetOpportunities, UpdateOpportunity } from '../../store/actions/opportunityActions';

export class Opportunities extends Component {

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    if(!this.props.opportunities){
      this.props.getNextOpportunities(1);
    }
  }
  componentDidUpdate(){
    document.addEventListener('scroll', this.trackScrolling);

  }
  trackScrolling = () => {
    console.log(window.innerHeight, document.documentElement.scrollTop, document.documentElement.offsetHeight);
      
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
      if(this.props.opportunities&&this.props.paging.current_page!=this.props.paging.total_page){
        this.props.getNextOpportunities(this.props.paging.current_page+1);
        document.removeEventListener('scroll', this.trackScrolling);
      }
    }
  };
  render() {
    const {opportunities, } = this.props
    return (
      <div id="opportunities">
        {opportunities?<Grid container spacing={32} justify="space-evenly" alignItems="flex-start" >
          {opportunities.map(opportunity=><CardView key={opportunity.id} opportunity={opportunity} onUpdate={this.props.UpdateOpportunity}/>)}
        </Grid>:<CircularProgress/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  opportunities:state.opportunities.opportunities,
  opportunitiy:state.opportunities.opportunity,
  paging:state.opportunities.paging
})

const mapDispatchToProps =(dispatch)=> {
  return {
  getNextOpportunities: (page)=>{return dispatch(GetOpportunities(page))},
  getOpportunity:(id)=>{return dispatch(GetOpportunity(id))},
  updateOpportunity:(opportunity)=>{return dispatch(UpdateOpportunity(opportunity))},
}}

export default connect(mapStateToProps, mapDispatchToProps)(Opportunities)
