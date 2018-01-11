'use strict';
describe('Table', () => {
    it('should be of type Table', () => {
        const t = new Table();
        expect(t).toEqual(jasmine.any(Table));
    });
  
    it('should return false if no reobot is placed', () => {
        const t = new Table();
        expect(t.placed()).toEqual(false);
    })
});
