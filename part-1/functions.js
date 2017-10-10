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

module.exports = weekday;
