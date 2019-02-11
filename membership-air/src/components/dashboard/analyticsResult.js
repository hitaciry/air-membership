import { Grid, Paper, CircularProgress } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import React,{Component} from 'react';
import CardIndicator from './cardIndicator';
import { connect } from 'react-redux';
import { Directions, Programs, Stages } from '../../constants/gisApi';

const middleJustify={maxWidth:500, margin:"auto"}

class AnalyticsResult extends Component {
  constructor(props){
    super(props)
    if(this.props.analytics){
      this.state={
        program:this.props.analytics[0].directionData[0].programKey,
        direction:this.props.analytics[0].directionKey
      }
    }
    else{
      this.state={
        program:"",
        direction:""
      }

    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.analytics !== prevProps.analytics) {
      this.setState({
        program:this.props.analytics[0].directionData[0].programKey,
        direction:this.props.analytics[0].directionKey
      })
    }
  }
render(){
const {analytics, lcs, isLoading} =this.props 
  if (isLoading) return( <CircularProgress style={middleJustify} ></CircularProgress>)
  if (!analytics) return(<div style={middleJustify}>No Data</div>)
  const analyticsData=[]
  if(this.state.direction!==""&&this.state.program!==""){
    const currentData=analytics.filter(f=>f.directionKey===this.state.direction)
                              .reduce((a,l)=>{a=[...a,...l.directionData];return a;},[])
                              .filter(f=>f.programKey===this.state.program)
                              .reduce((a,l)=>{a=[...a,...l.programData];return a;},[])[0];
    const lcNames= lcs.reduce((accumulator, next)=>{accumulator[next.id]=next.name
                              return accumulator;},{})
    const children= currentData.children.buckets.map(c=>({...c, name:lcNames[c.key]}))
    
    for (const item of Stages) {
      if (currentData.hasOwnProperty(item.key)) {
        const element = currentData[item.key];
        var ch=children.map(c=>({name:c.name,id:c.key, value:c[item.key]}))
        analyticsData.push({...item,element,children:ch})
      }
    }
  }
    
  return ([
    <Grid item xs={12} md={6}>
      <Paper style={middleJustify}>
          <Tabs value={this.state.direction}
          variant="fullWidth" onChange={(event,val)=>{this.setState({direction:val})}}>
          {Object.keys(Directions).map(direction=>
            <Tab key={direction} value={direction} label={direction}/>
          )}
          </Tabs>
      </Paper>
      <br/>
      <Paper style={middleJustify}>
        <Tabs value={this.state.program} 
        variant="fullWidth" onChange={(event,val)=>{this.setState({program:val})}}>
          {Object.keys(Programs).map(program=>
                  <Tab key={program}
                    value={program}
                    label={program}
                    classes={{selected:`color-${program.toLowerCase()}`
                  }}/>
            )
          }
        </Tabs>
      </Paper>
    </Grid>,
    <Grid item xs={12} md={12}>
          <br/>
      <Grid container spacing={8} alignItems='center' justify='center' direction='row'>
        {analyticsData.map(data=>
            <CardIndicator key={data.key} color={`color-${this.state.program.toLowerCase()}`} element={data.element} name={data.name} children={data.children}/>
            )}
      </Grid>
    </Grid>]
  )
        }
}

const mapStateToProps=(state )=>({
  lcs:state.lcs,
  analytics: state.analytics.result,
  isLoading: state.analytics.fetching
})
export default connect(mapStateToProps) (AnalyticsResult)


