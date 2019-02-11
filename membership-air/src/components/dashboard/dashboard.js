import React from 'react'
import AnalyticsResult from './analyticsResult';
import AnalyticsSearchForm from './analyticsSearchForm';
import { Grid } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Grid container spacing={24} >
      <Grid item xs={12} md={6}><AnalyticsSearchForm/>
      </Grid>
      
      <AnalyticsResult/>
    </Grid>
  ) 
}

export default Dashboard
