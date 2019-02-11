import {
  getAnalytics,
  getAllAnalytics
} from "../../gisApi/getAnalytics";

const LoadAnalytics = (startDate,endDate) => (dispatch) => {
  dispatch({
    type: "FETCHING_ANALYTICS",
    fetching: true
  })
  console.log(startDate,endDate)
  return getAllAnalytics(startDate,endDate).then(analytics => {
    dispatch({
      type: "LOAD_ANALYTICS",
      lastUpdate: new Date().toLocaleString(),
      analytics
    })
  })
}
export default LoadAnalytics