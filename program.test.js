const add = require('./program').default

test('program', () => {
    it('should add numbers', () => {
        expect(add(1, 2)).toBe(3)
    })
})