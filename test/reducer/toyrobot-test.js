'use strict';
describe('App State Reducer', () => {
    it('should default to array', () => {
        const state = store.getState();
        expect(state).toEqual(jasmine.any(Object));
        expect(state.toyRobot).toEqual(jasmine.any(Array));
    });
});
