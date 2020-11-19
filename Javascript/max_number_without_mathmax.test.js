const mathMax = require('./max_number_without_mathmax')
test('Should return max number', ()=> {
    expect(mathMax([1,9,-1000, -100, 8,4,6,20,97,6000,1981,2,4,4,8,1000])).toStrictEqual(6000)
});
