import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';


//  const exampleState = [
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0
//      ];

const toyRobot = (state = [], action) => {
    const newState = [...state];
    switch (action.type) {
        case types.PLACE:
            return null;
        case types.LEFT:
            return null;
        case types.RIGHT:
            return null;
        case types.MOVE:
            return null;
        case types.REPORT:
            return null;
        default:
            return newState;
    }
};


const rootReducer = combineReducers({
    toyRobot,
    routing
});

export default rootReducer;
