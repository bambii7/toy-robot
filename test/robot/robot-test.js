'use strict';
describe('Robot', () => {
    it('should be of type Robot', () => {
        const r = new RobotController();
        expect(r).toEqual(jasmine.any(RobotController));
    });

    it('should have a default property facing', () => {
        const r = new RobotController();
        expect(r.facing).toEqual(RobotModel.FACES.NORTH);
    });
  
    it('should be able to rotate RIGHT', () => {
        const r = new RobotController();
        r.right();
        expect(r.facing).toEqual(RobotModel.FACES.EAST);
    });
  
    it('should be able to rotate LEFT', () => {
        const r = new RobotController();
        r.left();
        expect(r.facing).toEqual(RobotModel.FACES.WEST);
    });
  
    it('should return the index of the turning cycle', () => {
        const r = new RobotController();
        expect(r.facingIndex()).toEqual(0);
        r.right();
        expect(r.facingIndex()).toEqual(1);
        r.right();
        expect(r.facingIndex()).toEqual(2);
        r.right();
        expect(r.facingIndex()).toEqual(3);
    });
  
    it('should be able to rotate indefinitely LEFT', () => {
        const r = new RobotController();
        r.left();
        expect(r.facing).toEqual(RobotModel.FACES.WEST);
        r.left();
        expect(r.facing).toEqual(RobotModel.FACES.SOUTH);
        r.left();
        expect(r.facing).toEqual(RobotModel.FACES.EAST);
        r.left();
        expect(r.facing).toEqual(RobotModel.FACES.NORTH);
        r.left();
        expect(r.facing).toEqual(RobotModel.FACES.WEST);
    });

    it('should be able to rotate indefinitely RIGHT', () => {
        const r = new RobotController();
        r.right();
        expect(r.facing).toEqual(RobotModel.FACES.EAST);
        r.right();
        expect(r.facing).toEqual(RobotModel.FACES.SOUTH);
        r.right();
        expect(r.facing).toEqual(RobotModel.FACES.WEST);
        r.right();
        expect(r.facing).toEqual(RobotModel.FACES.NORTH);
        r.right();
        expect(r.facing).toEqual(RobotModel.FACES.EAST);
    });
});
