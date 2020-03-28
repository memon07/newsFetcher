import Immutable from 'immutable';
import * as ActionType from '../actionTypes/visitor';

export const initialState = Immutable.fromJS(null)

const initialVisitorState = {
    arr:[]
}

export default function (state = initialVisitorState,action) {
    switch(action.type) {
        
        case ActionType.POST_VISITOR :
            return { 
                ...state,
                arr: [...state.arr, action.payload]
            }
        
        default:
            return state
    }
}