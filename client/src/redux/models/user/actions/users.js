import * as types from '../../../constants/types';
import {GetMostActiveUsers,GetUsers,PostUsers} from '../../../api/http';

export  function getMostActiveUsers() {
    let mostActiveUsers;
    return async (dispatch) => {
        mostActiveUsers=  await GetMostActiveUsers();
        dispatch(updateMostActiveUsers(mostActiveUsers));
        return(mostActiveUsers); 
    };
}

export  function getUsers() {
    let users;
    return async (dispatch) => {
        users=  await GetUsers();
        dispatch(updateUsers(users));
        return(users); 
    };
}

export  function postUsers(usersFile) {
    return async () => {
       await PostUsers(usersFile); 
    };
}

export function updateMostActiveUsers(mostActiveUsers) { 
        return {
            type: types.users.GETMOSTACTIVEUSERS,
            mostActiveUsers
        };
}

export function updateUsers(users) { 
        return {
            type: types.users.GETUSERS,
            users
        };
}