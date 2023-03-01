//action => what are the taks to be done
// reducers => how to perform these actions
// rootreducer has all the states of our application

import { createStore } from "redux";

import rootReducer from "./reducers/index";


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // now store is the global centralized state


export default store;