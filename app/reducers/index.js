import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import Table from '../components/Table';
import TableModel from '../models/TableModel';
import * as types from '../actions/types';


//  const exampleState = [
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0
//      ];

const toyRobot = (state = TableModel.tableFactory(), action) => {
    const newState = Array.from(state);
    const table = new Table(newState);

    switch (action.type) {
        case types.PLACE:
            table.place(action.x, action.y, action.facing);
            return table.area;
        case types.LEFT:
            return null;
        case types.RIGHT:
            return null;
        case types.MOVE:
            return table.move();
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
