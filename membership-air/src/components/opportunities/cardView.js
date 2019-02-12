import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import Edit from '@material-ui/icons/Edit';
import colors from '../style/colors';
import Avatar from '@material-ui/core/Avatar';

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

const CardView = ({opportunity,onClick}) => {
  return (
    <Grid item >
      <Paper style={{width:300, height:280}}>
        <div style={{backgroundImage:`url(${opportunity.cover_photo_urls})`, height:140}}>
         <div style={overlayStyle(opportunity.programmes.short_name)}>
          <div style={{display:"flex"}}>
            <div style={{color:"white", padding:10}} >
              {opportunity.programmes.short_name}
            </div>
            <div style={{flex:1}}></div>
            <div >
              <IconButton color="inherit" onClick={()=>onClick(opportunity.id)}>
                <Edit/>
              </IconButton>
            </div>
          </div>
          <div style={{textAlign:"center",height:"80%", color:"white",
          verticalAlign: "center"}}><div>{opportunity.title}</div></div>
         </div>
        </div>
        <div style={{display:"flex", padding:10}}>
          <Avatar className={'color-'+opportunity.programmes.short_name.toLowerCase()}>{opportunity.branch.organisation.name[0]}</Avatar>
          <div style={{flex:0.7,alignItems: "center",display: "flex",paddingLeft: 10}}>{opportunity.branch.organisation.name}</div>
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
