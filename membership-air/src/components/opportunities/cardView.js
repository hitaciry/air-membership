import React from 'react'
import { Grid, Card, CardContent, Checkbox as Checkbox1, CardActions, Paper } from '@material-ui/core';

import  {FavoriteBorder, Favorite } from '@material-ui/icons';
import colors from '../style/colors';

const overlayStyle=(program)=>({
  
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  opacity: .7,
  zIndex: 21,
  backgroundColor:colors[program.toLowerCase()],
  color:"white"
})

const CardView = ({opportunity,onUpdate}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper style={{width:300, height:280}}>
        <div style={{backgroundImage:`url(${opportunity.cover_photo_urls})`, height:140}}>
         <div style={overlayStyle(opportunity.programmes.short_name)}>
          <div style={{display:"flex", padding:10}}>
            <div >
              {opportunity.programmes.short_name}
            </div>
            <div style={{flex:1}}></div>
            <div >
              <FavoriteBorder  />
            </div>
          </div>
          <div style={{textAlign:"center",height:"80%",
          verticalAlign: "middle"}}><div>{opportunity.title}</div></div>
         </div>
        </div>
        <div style={{display:"flex", padding:10}}>
          <div style={{width:40,height:40,backgroundImage:`url(${opportunity.cover_photo_urls})`}} >icon</div> 
          <div style={{flex:0.7}}>{opportunity.branch.organisation.name}</div>
          </div>  
          <div style={{display:"flex",padding:10}}>
          <div style={{flex:0.6}}>Location:<br/> {opportunity.location}</div>
          <div style={{flex:0.4, textAlign:"right"}}>Duration:<br/> {opportunity.duration} weeks</div>
          </div>
      </Paper>
    </Grid>
  )
}

export default CardView
