'use strict';
describe('Robot', () => {
    it('should be of type Robot', () => {
        const r = Robot.new();
        expect(r).toEqual(jasmine.any(Robot));
    });
});
