'use strict';
describe('Robot', () => {
    it('should be of type Robot', () => {
        const r = new Robot();
        expect(r).toEqual(jasmine.any(Robot));
    });

    it('should have a default property facing', () => {
        const r = new Robot();
        expect(r.facing).toEqual('NORTH');
    });
});
