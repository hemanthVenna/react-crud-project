const UserListReducer = (state=[],action) => {
    
    switch(action.type){
        case "USER_LIST":
        // const newState = action.payload;
            return action.payload;
        case "DELETE_USER":
            console.log("delete users")
            console.log([...state])
            const users = [...state];
            console.log(action.payload)
            for(var i=0;i<action.payload.length;i++){
                var delUser = users.filter((item) => {
                    console.log(item.name)
                    console.log(action.payload[i])
                    return item.name !== action.payload[i]
                })
            }
            console.log("delUser");
            console.log(delUser)
            if(delUser){
                return delUser;
            }else{
                return [...state]
            }
           
        case "ADD_USER":
           return [...state,action.payload]
            // return ;
        default:
            return state;
    }
}

export default UserListReducer;