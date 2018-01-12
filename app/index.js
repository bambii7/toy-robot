import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { store, history } from './store/configureStore';
import Root from './containers/Root';
import RobotModel from './models/RobotModel';
import RobotController from './controllers/RobotController';
import Table from './components/Table';
import TableModel from './models/TableModel';

import PLACE from './actions/place';
import MOVE from './actions/MOVE';
import LEFT from './actions/LEFT';
import RIGHT from './actions/RIGHT';

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);

render(
    <AppContainer>
        <Root store={store} history={history}  />
    </AppContainer>,
    document.getElementById('root')
);

// expose Robot
window.RobotModel = RobotModel;
window.RobotController = RobotController;
window.Table = Table;
window.TableModel = TableModel;
window.store = store;
window.PLACE = PLACE;
window.MOVE = MOVE;
window.LEFT = LEFT;
window.RIGHT = RIGHT;
window.REPORT = () => {
    const state = store.getState().toyRobot;
    const table = new Table(state);
    console.log(table.report());
    console.table(state);
};
// export { Robot, Table, TableModel, store, PLACE, MOVE, LEFT, RIGHT, REPORT };


//  PLACE(0, 0, RobotModel.FACES.NORTH);
//  MOVE();
//  RIGHT();
//  LEFT();
//  LEFT();
//  MOVE();
//  MOVE();
//  MOVE();
//  MOVE();
//  MOVE();
//  MOVE();
