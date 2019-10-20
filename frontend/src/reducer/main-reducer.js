import { combineReducers } from "redux";
import mapData from "./map-reducer";
import ordnanceData from "./ordnance-reducer";

export default combineReducers({
  mapData,
  ordnanceData
});
