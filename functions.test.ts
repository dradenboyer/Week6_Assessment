const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let testArray = [100, 75, 50, 25, 1]
    test('Returns an array', () => {
        expect(Array.isArray(shuffleArray(testArray))).toBe(true)
    })
    test('Length arrays the same', () => {
        expect(shuffleArray(testArray).length).toEqual(shuffleArray(testArray).length)
    })
})