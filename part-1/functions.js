const weekday = (date) => {
  // make sure a Date obj is what's passed in
  if (!(date instanceof Date)) {
    throw new TypeError('Must pass a valid Date');
  }
  const dayAsNumber = date.getDay();
  // use getDay() method and switch statement to return appropriate day abbreviation
  switch (dayAsNumber) {
    // getDay() is a Date prototype function that returns 0-6 where 0 is sunday
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      // this shouldnt really ever get thrown, but in theory if getDay() was overwritten on the
      // instance of Date that was passed, then it could return something else
      throw new Error(`Unknown error. Expected an integer from 0 to 6, got a ${typeof dayAsNumber} : ${dayAsNumber}`);
  }
};

const snippet = (string, maxLength) => {
  if (typeof maxLength !== 'number') {
    throw new TypeError(`Expected a number. Got a ${typeof maxLength}.`);
  } else if (typeof string !== 'string') {
    throw new TypeError(`Expected a string. Got a ${typeof string}.`);
  } else if (maxLength < 0) {
    throw new RangeError('Length cannot be less than 0.');
  } else if (string.length <= maxLength) {
    return string;
  } else {
    return `${string.substring(0, maxLength)}...`;
  }
};

const numProps = (obj) => {
  if (obj === (null || undefined)) {
    throw new ReferenceError('You must pass an object.');
  } else {
    return Object.getOwnPropertyNames(obj).length;
  }
};

const filterBetween = (arr, min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected number.');
  } else if (!(arr instanceof Array)) {
    throw new TypeError('Expected array.');
  } else if (min < 0 || max < 0 || max < min) {
    throw new RangeError('Min and max must both be 0 or more. Max must be greater or equal to min.');
  } else {
    arr.forEach( element => { if (typeof element !== 'number') throw new TypeError('XP');});
    var toReturn = arr.filter( element => element >= min && element <= max);
  }
  return toReturn;
};
module.exports = { weekday, snippet, numProps, filterBetween };
