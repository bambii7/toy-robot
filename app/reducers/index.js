import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import Table from '../components/Table';
import TableModel from '../models/TableModel';
import RobotController from '../controllers/RobotController';
import * as types from '../actions/types';


//  const exampleState = [
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0,
//          0, 0, 0, 0, 0
//      ];

const toyRobot = (state = TableModel.tableFactory(), action) => {
    const table = new Table(state);
    let robot;

    switch (action.type) {
        case types.PLACE:
            table.place(action.x, action.y, action.facing);
            return table.area;
        case types.LEFT:
            if (!table.placed()) {
                throw new Error(Table.ERROR_TYPES.INVLAID_PLACEMENT);
            }
            robot = new RobotController(table.faceing);
            robot.left();
            table.facing = robot.facing;
            return table.area;
        case types.RIGHT:
            if (!table.placed()) {
                throw new Error(Table.ERROR_TYPES.INVLAID_PLACEMENT);
            }
            robot = new RobotController(table.faceing);
            robot.right();
            table.facing = robot.facing;
            return table.area;
        case types.MOVE:
            return table.move();
        default:
            return table.area;
    }
};


const rootReducer = combineReducers({
    toyRobot,
    routing
});

export default rootReducer;
