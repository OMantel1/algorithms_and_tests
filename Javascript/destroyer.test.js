const destroyer = require('./destroyer.js')

test(' should destroy ', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toStrictEqual([1,1])
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toStrictEqual([1,5,1])
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toStrictEqual(["hamburger"])
});