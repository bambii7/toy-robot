import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);
export const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(middleware),
        DevTools.instrument()
    )
);
