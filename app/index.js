import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { store, history } from './store/configureStore';
import Root from './containers/Root';
import Robot from './components/Robot';
import Table from './components/Table';
import TableModel from './models/TableModel';

import PLACE from './actions/place';

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
window.Robot = Robot;
window.Table = Table;
window.TableModel = TableModel;
window.store = store;
window.PLACE = PLACE;
// export { Robot, Table, TableModel, store };
