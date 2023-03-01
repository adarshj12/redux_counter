// tgis is the root reducer

import changeNumber from "./upDown";

//multiple reducers can be combined usuing
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber
    //it is actually changeNumber:changeNumber
})


export default rootReducer;