import * as types from './types';
import { store } from '../store/configureStore';

export default function RIGHT() {
    const action = {
        type: types.RIGHT
    };
    store.dispatch(action);
}
