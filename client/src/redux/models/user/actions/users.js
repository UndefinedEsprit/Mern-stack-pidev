import * as types from '../../../constants/types';
import {GetMostActiveUsers,GetUsers,PostUsers,GetMostFrequentAge} from '../../../api/http';

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

export  function getMostFrequentAge() {
    let mostFrequentAge;
    return async (dispatch) => {
        mostFrequentAge=  await GetMostFrequentAge();
        dispatch(updateMostFrequentAge(mostFrequentAge));
        return(mostFrequentAge); 
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
export function updateMostFrequentAge(mostFrequentAge) { 
        return {
            type: types.users.GETMOSTFREQUENTAGE,
            mostFrequentAge
        };
}
export function updateUsers(users) { 
        return {
            type: types.users.GETUSERS,
            users
        };
}