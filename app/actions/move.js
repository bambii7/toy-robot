import * as types from './types';
import { store } from '../store/configureStore';

export default function MOVE() {
    const action = {
        type: types.MOVE
    };
    store.dispatch(action);
}
