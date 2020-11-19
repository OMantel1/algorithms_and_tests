const sayHello = require('./hello')

test('say hello', () => {
    expect(sayHello()).toBe("hello")
    expect(sayHello()).not.toBe("byebye")
})