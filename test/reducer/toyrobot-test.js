'use strict';
describe('App State Reducer', () => {
    it('should default to array', () => {
        const state = store.getState();
        expect(state).toEqual(jasmine.any(Object));
        expect(state.toyRobot).toEqual(jasmine.any(Array));
    });

    it('should default to 5x5 array', () => {
        const state = store.getState();
        expect(state.toyRobot).toEqual(TableModel.tableFactory());
    });

    it('should update state when PLACE command is called', () => {
        PLACE(1, 2, Robot.FACES.NORTH);
        const state = store.getState();
        expect(state.toyRobot).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, Robot.FACES.NORTH, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });
});
