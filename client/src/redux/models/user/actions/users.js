import * as types from '../../../constants/types';
import {GetMostActiveUsers} from '../../../api/http';

export  function getMostActiveUsers() {
    let mostActiveUsers;
    return async (dispatch) => {
        mostActiveUsers=  await GetMostActiveUsers();
        dispatch(updateMostActiveUsers(mostActiveUsers));
        return(mostActiveUsers); 
    };
}

export function updateMostActiveUsers(mostActiveUsers) { 
        return {
            type: types.users.GETMOSTACTIVEUSERS,
            mostActiveUsers
        };
    }