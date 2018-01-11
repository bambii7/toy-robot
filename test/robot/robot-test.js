'use strict';
describe('Robot', () => {
    it('should be of type Robot', () => {
        const r = new Robot();
        expect(r).toEqual(jasmine.any(Robot));
    });
});
