import * as types from './types';
import { store } from '../store/configureStore';

export default function LEFT() {
    const action = {
        type: types.LEFT
    };
    store.dispatch(action);
}
