import { getToken } from "./getToken";
import{Programs,Directions} from '../constants/gisApi'

export const getAnalytics= async (start_date
  , end_date
  , basic={type:'person',
      home_office_id:1618}
  , programmes=1
  ,access_token
)=>{
  access_token = access_token||await getToken()
  const data={
    access_token,
    start_date,
    end_date,
    "programmes[]":programmes,
    "basic[type]":basic.type,
    "basic[home_office_id]":basic.home_office_id
  }
  const url = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
}).join('&')
  return fetch("https://gis-api.aiesec.org/v2/applications/analyze.json?"+url
  ).then(r=>r.json())
}

export const getAllAnalytics = async(start_date
, end_date
, basic={
    home_office_id:1618})=>{
      const result=[];
      const token = await getToken();
      for (const directionKey in Directions) {
        if (Directions.hasOwnProperty(directionKey)) {
          const direction = Directions[directionKey];
          const directionData=[]
          for (const programKey in Programs) {
            if (Programs.hasOwnProperty(programKey)) {
              const program = Programs[programKey];
              const programData=[]
              programData.push( 
                (await getAnalytics(start_date,end_date,{type:direction,...basic},program, token)).analytics
              );
              directionData.push({programData,programKey});
            }
          }
          result.push({directionData,directionKey});
        }
      }
  return result;
}