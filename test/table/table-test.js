'use strict';
describe('Table', () => {
    it('should be of type Table', () => {
        const t = new TableController();
        expect(t).toEqual(jasmine.any(TableController));
    });

    it('should return false if no robot is placed', () => {
        const t = new TableController();
        expect(t.placed()).toEqual(false);
    });

    it('should be able to place a robot on the table', () => {
        const t = new TableController();
        t.place(0, 1, RobotModel.FACES.NORTH);
        expect(t.placed()).toEqual(true);
    });

    it('should be able to update the facing direction', () => {
        const t = new TableController();
        t.place(0, 1, RobotModel.FACES.NORTH);
        t.facing = RobotModel.FACES.EAST;
        expect(t.facing).toEqual(RobotModel.FACES.EAST);
    });

    it('should be able to output current state', () => {
        const t = new TableController();
        t.place(0, 1, RobotModel.FACES.NORTH);
        expect(t.report()).toEqual(`0, 1, ${RobotModel.FACES.NORTH}`);
    });
  
    it('should not be able to be placed out of bounds', () => {
        const t = new TableController();
        const invalidPlacement = () => { t.place(0, -1, RobotModel.FACES.NORTH) };
        expect(invalidPlacement).toThrow(new Error(TableController.ERROR_TYPES.INVLAID_PLACEMENT));
    });
  
    it('should validate if a position is posible', () => {
        const t = new TableController();
        expect(t.checkCollision(-1, 0)).toEqual(false);
        expect(t.checkCollision(1, 1)).toEqual(true);
        expect(t.checkCollision(0, -1)).toEqual(false);
        expect(t.checkCollision(4, 4)).toEqual(true);
    });

    it('should reverse the cartesian coordinates', () => {
        let t;
        t = new TableController();
        t.place(0, 0, RobotModel.FACES.NORTH);
        expect(t.area).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, RobotModel.FACES.NORTH]
        ]);
        t = new TableController();
        t.place(4, 4, RobotModel.FACES.EAST);
        expect(t.area).toEqual([
            [RobotModel.FACES.EAST, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should move the player UP if facing NORTH', () => {
        const t = new TableController();
        t.place(0, 0, RobotModel.FACES.NORTH);
        expect(t.move()).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, RobotModel.FACES.NORTH],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should move the player RIGHT if facing EAST', () => {
        const t = new TableController();
        t.place(1, 0, RobotModel.FACES.EAST);
        expect(t.move()).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, RobotModel.FACES.EAST]
        ]);
    });

    it('should move the player DOWN if facing SOUTH', () => {
        const t = new TableController();
        t.place(4, 4, RobotModel.FACES.SOUTH);
        expect(t.move()).toEqual([
            [0, 0, 0, 0, 0],
            [RobotModel.FACES.SOUTH, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should move the player LEFT if facing WEST', () => {
        const t = new TableController();
        t.place(3, 4, RobotModel.FACES.WEST);
        expect(t.move()).toEqual([
            [RobotModel.FACES.WEST, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]);
    });

    it('should throw error for invalid movements off table', () => {
        const t = new TableController();
        t.place(4, 4, RobotModel.FACES.NORTH);
        const invalidMovement = () => { t.move() };
        expect(invalidMovement).toThrow(new Error(TableController.ERROR_TYPES.INVLAID_MOVEMENT));
    });
});
