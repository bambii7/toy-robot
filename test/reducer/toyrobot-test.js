'use strict';
describe('App State Reducer', () => {
  
    it('should throw an invalid move error if not placed when turning', () => {
        const invalidMovementRight = () => { RIGHT(); };
        const invalidMovementLeft = () => { LEFT(); };
        expect(invalidMovementRight).toThrow(new Error(Table.ERROR_TYPES.INVLAID_PLACEMENT));
        expect(invalidMovementLeft).toThrow(new Error(Table.ERROR_TYPES.INVLAID_PLACEMENT));
    });
  
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
        PLACE(1, 2, RobotModel.FACES.NORTH);
        const state = store.getState();
        expect(state.toyRobot).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, RobotModel.FACES.NORTH, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should move robot up facing north and MOVE command is called', () => {
        PLACE(1, 2, RobotModel.FACES.NORTH);
        MOVE();
        const state = store.getState();
        expect(state.toyRobot).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, RobotModel.FACES.NORTH, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });
  
    it('should replace in new position', () => {
        PLACE(1, 2, RobotModel.FACES.NORTH);
        LEFT();
        const state = store.getState();
        expect(state.toyRobot).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, RobotModel.FACES.WEST, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should roate left when LEFT command is called', () => {
        PLACE(1, 2, RobotModel.FACES.NORTH);
        LEFT();
        const state = store.getState();
        expect(state.toyRobot).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, RobotModel.FACES.WEST, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should roate right when RIGHT command is called', () => {
        PLACE(1, 2, RobotModel.FACES.NORTH);
        RIGHT();
        const state = store.getState();
        expect(state.toyRobot).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, RobotModel.FACES.EAST, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });
});
