//reducers will decided how the tasks ordered in the actions.js has to done.
// updown.js is one of the reducer that happens to bw in the logic, but there is
// one and only one reducer in the code which is called the root reducer.
// it is in reducers/index.js

const initialState=0

// const changeNumber =(state=initialState,action)=>{
//     switch(action.type){
//         case 'increment':return state+1;
//         case 'decrement':return state-1;
//         default:return state;
//     }
// }

const changeNumber =(state=initialState,action)=>{
    switch(action.type){
        case 'increment':return state+action.payload;
        case 'decrement':return state-1;
        default:return state;
    }
}


export default changeNumber;  //we have to export this reducer to use it. there can be as many
                              // reducers in the code as the application demands.