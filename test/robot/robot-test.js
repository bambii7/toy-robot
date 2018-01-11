'use strict';
describe('Robot', () => {
    it('should be of type Robot', () => {
        const r = new Robot();
        expect(r).toEqual(jasmine.any(Robot));
    });

    it('should have a default property facing', () => {
        const r = new Robot();
        expect(r.facing).toEqual(Robot.FACES.NORTH);
    });
  
    it('should be able to rotate RIGHT', () => {
        const r = new Robot();
        r.right();
        expect(r.facing).toEqual(Robot.FACES.EAST);
    });
  
    it('should be able to rotate LEFT', () => {
        const r = new Robot();
        r.left();
        expect(r.facing).toEqual(Robot.FACES.WEST);
    });
  
    it('should return the index of the turning cycle', () => {
        const r = new Robot();
        expect(r.facingIndex()).toEqual(0);
        r.right();
        expect(r.facingIndex()).toEqual(1);
        r.right();
        expect(r.facingIndex()).toEqual(2);
        r.right();
        expect(r.facingIndex()).toEqual(3);
    });
  
    it('should be able to rotate indefinitely LEFT', () => {
        const r = new Robot();
        r.left();
        expect(r.facing).toEqual(Robot.FACES.WEST);
        r.left();
        expect(r.facing).toEqual(Robot.FACES.SOUTH);
        r.left();
        expect(r.facing).toEqual(Robot.FACES.EAST);
        r.left();
        expect(r.facing).toEqual(Robot.FACES.NORTH);
        r.left();
        expect(r.facing).toEqual(Robot.FACES.WEST);
    });

    it('should be able to rotate indefinitely RIGHT', () => {
        const r = new Robot();
        r.right();
        expect(r.facing).toEqual(Robot.FACES.EAST);
        r.right();
        expect(r.facing).toEqual(Robot.FACES.SOUTH);
        r.right();
        expect(r.facing).toEqual(Robot.FACES.WEST);
        r.right();
        expect(r.facing).toEqual(Robot.FACES.NORTH);
        r.right();
        expect(r.facing).toEqual(Robot.FACES.EAST);
    });
});
