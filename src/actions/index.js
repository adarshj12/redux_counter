// all actions to be performed in the application has to be codeddd here.

// export const incNumber=()=>{
//     return {
//         type:"increment"
//     }
// }

// export const decNumber=()=>{
//     return {
//         type:"decrement"
//     }
// }

//in the case of customized actions, like passing an argument with the event 
//eg; incementing/decrementing by 5;

export const incNumber=(num)=>{
    return {
        type:"increment",
        payload:num
    }
}

export const decNumber=()=>{
    return {
        type:"decrement"
    }
}