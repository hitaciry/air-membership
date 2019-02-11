import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadAnalytics from '../../store/actions/analyticsActions';
import { CardActions, Button, Card, CardContent } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker ,MuiPickersUtilsProvider} from "material-ui-pickers";

export class AnalyticsSearchForm extends Component {
  constructor(props){
    super(props)
    this.state={
      startDate:new Date('2018-08-01').toISOString(),
      endDate:new Date().toISOString()
    }
  }
  componentDidMount(){
    const {loadAnalytics,lastUpdate,fetching}=this.props;
    console.log(this.props, this.state);
    if(!lastUpdate&&!fetching){
      loadAnalytics(this.state.startDate,this.state.endDate);
    }
  }
  render() {
    const {loadAnalytics,lastUpdate,fetching}=this.props;
    let {startDate,endDate}= this.state;
    return (
      <div style={{margin:"auto"}}>
        <Card style={{maxWidth:500, margin:"auto"}}>
          <CardContent>
            <p>Last update at {lastUpdate}</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker label="start date" 
                          value={new Date(startDate)} 
                          onChange={(value)=>this.setState({startDate:value.toISOString()})} />
              <DatePicker label="end date" 
                          value={new Date(endDate)} 
                          onChange={(value)=>this.setState({endDate:value.toISOString()})} />
            </MuiPickersUtilsProvider>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="outlined" onClick={()=>{loadAnalytics(startDate, endDate)}} disabled={fetching}> Search</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  lastUpdate:state.analytics.lastUpdate,
  fetching: state.analytics.fetching
})

const mapDispatchToProps =(dispatch)=> ({
  loadAnalytics:(startDate,endDate)=>{dispatch(LoadAnalytics(startDate,endDate))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsSearchForm)
