const DeleteUserReducer = (state=[],action) => {
    
    switch(action.type){
        case "DELETE_USER":
            console.log("dleteReducer",action.payload)
            // console.log(getState(userDataList))
            
            return action.payload;
        default:
            return state;
    }
}

export default  DeleteUserReducer;