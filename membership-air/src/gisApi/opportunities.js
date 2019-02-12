const url="https://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities"
const token="access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"
export const getOpprortunities=(page)=>{
  return fetch(url+"?"+token+"&page="+page).then(r=>r.json())
}

export const getOpprortunity=(id)=>{
  
  return fetch(url+`/${id}?`+token).then(r=>r.json())
}

export const updateOpprortunity=(opportunity)=>{
  
  return fetch(url+`/${opportunity.id}?`+token,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"PATCH",
    body:JSON.stringify({access_token:"dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"
                        ,opportunity:{...opportunity,
                                      study_levels:opportunity.study_levels.map(s=>s.id)}
                        })
    }).then(r=>r.json())
}