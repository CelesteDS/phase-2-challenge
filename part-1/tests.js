const expect = require('chai').expect
const { weekday, snippet } = require('./functions.js')

describe('weekday', function () {
  it('should return correct abbreviation when given a date', function () {
    expect(weekday(new Date(2017, 9, 15))).to.eql('Sun');
    expect(weekday(new Date(1955, 10, 5))).to.eql('Sat');
  //  creates a new date passes into weekday, expects it to return a string 'Sun'
  // testing that valid input gets correct output
  });
  // With invalid input, these tests should throw errors
  it('should throw an TypeError when passed something other than a Date', function () {
    expect(() => weekday('This string is no date.')).to.throw(TypeError);
    expect(() => weekday(1234)).to.throw(TypeError);
  });
  // Uses callback because otherwise will throw error while calling the function
  // in param field and won't correctly test. expect(weekday(invalidInput)).to.throw();
  // throws an uncaught error and exits testing.
  //
  //   10: A test using expected/valid inputs for the weekday() function is written in tests.js.
  //   10: A test using unexpected/invalid inputs for the weekday() function is written in tests.js.
  //   30: Correct implementation of the weekday() is defined in functions.js.
  //   10: Tests for weekday() are passing.
});

describe('snippet', function () {
  // With valid input, these tests should work
  it('should return strings shorter than maxlength unchanged', function () {
    expect(snippet('Test 1', 10)).to.eql('Test 1');
  });
  it('should return strings shortened', function () {
    expect(snippet('0123456789', 4).length).to.eql(7);
  });
  it('should add ellipsis to the end of a shortened string', function () {
    expect(snippet('Test 3', 4)).to.eql('Test...');
  });
  // With invalid input, these tests should throw errors
  it('should throw an error if 2nd parameter is not a number', function () {
    expect(function () { snippet('Test 4', 'string,not a number'); }).to.throw(TypeError);
  });
  it('should throw an error if 1st parameter is not a string', function () {
    expect(function () { snippet(true, 5); }).to.throw(TypeError);
  });

  it('should throw an error if the maxlength is less than 0', function () {
    expect(function () { snippet('Test 6', -5); }).to.throw(RangeError);
  });
// Write a function snippet(string, maxlength) that shortens the string given to
// the maxlength and adds the ellipsis character ("…") to the end of string, and
// then returns the shortened string. If the string is shorter than the maxlength,
// just return the string unmodified.
// 10: A test using expected/valid inputs for the snippet() function is written in tests.js.
// 10: A test using unexpected/invalid inputs for the snippet() function is written in tests.js.
// 30: Correct implementation of the snippet() is defined in functions.js.
// 10: Tests for snippet() are passing.
});

// describe('numProps', function () {
//   it('should return the right number of properties', function () {
//     expect(numProps( { 1: 'one', 2: 'two', 3: 'three' } )).to.eql(3);
//   });
//   it('should return zero if the object passed is empty', function () {
//     expect(numProps({ })).to.eql(0);
//   });
//   it('should throw an error if not passed anything', function () {
//     expect(() => numProps()).to.throw(ReferenceError);
//   });
// //   Write a function numProps(obj) that returns the number of properties an object
// //   has. Ignore symbolic properties and count only the "own properties" (not
// //     inherited) of the object.
// //     10: A test using expected/valid inputs for the numProps() function is written in tests.js.
// // 10: A test using unexpected/invalid inputs for the numProps() function is written in tests.js.
// // 30: Correct implementation of the numProps() is defined in functions.js.
// // 10: Tests for numProps() are passing.
// });
//
//
// describe('filterBetween', function () {
//   // valid input should produce what we expect
//   it('should return a new array with only the indicated values', function () {
//     const returnedArray = filterBetween([0, 1, 2, 3, 4], 1, 3);
//     expect(returnedArray[0]).to.eql(1);
//     expect(returnedArray[returnedArray.length - 1]).to.eql(3);
//   });
//   // testing invalid input
//   it('should throw a TypeError when incompatible parameters passed', function () {
//     expect(() => filterBetween(123, 1, 2)).to.throw(TypeError);
//     expect(() => filterBetween([0, 1, 2], 'string', 2)).to.throw(TypeError);
//     expect(() => filterBetween(['these', 'are', 'strings'], 1, 2)).to.throw(TypeError);
//   });
// // Write a function filterBetween(array, min, max) that takes an array of numbers,
// // a min value, and a max value. It returns a new array containing only the
// // elements that are greater than or equal to min and less than or equal to max.
// // 10: A test using expected/valid inputs for the filterBetween() function is written in tests.js.
// // 10: testing unexpected/invalid inputs for the filterBetween() function is written in tests.js.
// // 30: Correct implementation of the filterBetween() is defined in functions.js.
// // 10: Tests for filterBetween() are passing.
// });
