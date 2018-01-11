'use strict';
describe('Table', () => {
    it('should be of type Table', () => {
        const t = new Table();
        expect(t).toEqual(jasmine.any(Table));
    });
});
