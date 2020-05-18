import {SET_USER} from './actionTypes';

const intiailState = {};

export default function (state = intiailState, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload.user;
        default:
            return state;
    }
}