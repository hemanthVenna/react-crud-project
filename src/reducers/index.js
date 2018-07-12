import {combineReducers} from 'redux';
import UserListReducer from './userListReducer';
import SelectUserReducer from './selectUserReducer';
// import DeletedUserReducer from './deletedUserReducer.js';

const appStore = combineReducers({
    userDataList : UserListReducer,
    selectedUser: SelectUserReducer
    // deletedUser: DeletedUserReducer
})

export default appStore;