import {SIGNIN} from './actionTypes';
export const signIn = (user) => ({
    type: SIGNIN,
    user
});