import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => {
    return APIUtil.fetchUsers().then(users => {
        return dispatch(receiveAllUsers(users));
    });
}

export const fetchUser = userId => dispatch => {
    return APIUtil.fetchUser(userId).then(user => {
        return dispatch(receiveUser(user));
    });
}

export const updateUser = user => dispatch => {
    return APIUtil.updateUser(user).then(user => {
        return dispatch(receiveUser(user));
    });
}