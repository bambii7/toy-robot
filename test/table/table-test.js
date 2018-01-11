'use strict';
describe('Table', () => {
    it('should be of type Table', () => {
        const t = new Table();
        expect(t).toEqual(jasmine.any(Table));
    });

    it('should return false if no reobot is placed', () => {
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
});
