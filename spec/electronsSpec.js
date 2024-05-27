const electronsAroundCores = require('../src/electrons');

describe('Electrons Around the Cores', () => {
    it('should return 6 for input [1, 2, 3, 4, 5]', () => {
        expect(electronsAroundCores([1, 2, 3, 4, 5])).toBe(6);
    });
});

describe('Electrons Around the Cores', () => {
    it('should return 6 for input [1, 2, 3, 4, 5]', () => {
        expect(electronsAroundCores([1, 2, 3, 4, 5])).toBe(6);
    });
    it('should return 4 for input [2, 2, 3, 3]', () => {
        expect(electronsAroundCores([2, 2, 3, 3])).toBe(4);
    });
    it('should return 2 for input [6, 6, 4, 4, 1, 3]', () => {
        expect(electronsAroundCores([6, 6, 4, 4, 1, 3])).toBe(2);
    });
    it('should return 12 for input [3, 5, 3, 5, 4, 2]', () => {
        expect(electronsAroundCores([3, 5, 3, 5, 4, 2])).toBe(12);
    });
});
