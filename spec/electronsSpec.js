const electronsAroundCores = require('../src/electrons');

describe('Electrons Around the Cores', () => {
    it('should return 6 for input [1, 2, 3, 4, 5]', () => {
        expect(electronsAroundCores([1, 2, 3, 4, 5])).toBe(6);
    });
});
