import * as types from './types';
import { store } from '../store/configureStore';

export default function PLACE(x, y, f) {
    const action = {
        type: types.PLACE,
        x: x,
        y: y,
        f: f
    };
    store.dispatch(action);
}
