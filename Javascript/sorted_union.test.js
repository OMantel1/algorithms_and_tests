const uniteUnique = require('./sorted_union.js');

test('return new array of unique values ', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toStrictEqual([1, 3, 2, 5, 4])
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toStrictEqual([1, 2, 3, 5])
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toStrictEqual([1, 2, 3, 5, 4, 6, 7, 8])
});