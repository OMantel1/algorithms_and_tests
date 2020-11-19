const palindromeCheck = require('./palindrome_checker.js')

test('Is it a palindrom', () => {
    expect(palindromeCheck('oco')).toStrictEqual(true)
    expect(palindromeCheck('ressasser')).toStrictEqual(true)
    expect(palindromeCheck('none')).toStrictEqual(false)
});