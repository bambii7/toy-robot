'use strict';
describe('Table', () => {
    it('should be of type Table', () => {
        const t = new Table();
        expect(t).toEqual(jasmine.any(Table));
    });

    it('should return false if no robot is placed', () => {
        const t = new Table();
        expect(t.placed()).toEqual(false);
    });

    it('should be able to place a robot on the table', () => {
        const t = new Table();
        t.place(0, 1, Robot.FACES.NORTH);
        expect(t.placed()).toEqual(true);
    });

    it('should be able to output current state', () => {
        const t = new Table();
        t.place(0, 1, Robot.FACES.NORTH);
        expect(t.report()).toEqual(`0, 1, ${Robot.FACES.NORTH}`);
    });
  
    it('should not be able to be placed out of bounds', () => {
        const t = new Table();
        const invalidPlacement = () => { t.place(0, -1, Robot.FACES.NORTH) };
        expect(invalidPlacement).toThrow(new Error('Invalid Placement'));
    });
  
    it('should validate if a position is posible', () => {
        const t = new Table();
        expect(t.checkCollision(-1, 0)).toEqual(false);
        expect(t.checkCollision(1, 1)).toEqual(true);
        expect(t.checkCollision(0, -1)).toEqual(false);
        expect(t.checkCollision(4, 4)).toEqual(true);
    });

    it('should reverse the cartesian coordinates', () => {
        const t = new Table();
        t.place(0, 0, Robot.FACES.NORTH);
        expect(t.area).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, Robot.FACES.NORTH]
        ]);
    });
    
});
