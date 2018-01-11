import * as types from './types';
import { store } from '../store/configureStore';

export default function PLACE(x, y, facing) {
    const action = {
        type: types.PLACE,
        x: x,
        y: y,
        facing: facing
    };
    store.dispatch(action);
}
