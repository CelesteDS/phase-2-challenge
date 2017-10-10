function weekday(date) {
  // use getDay() method and switch statement to return appropriate day abbreviation
  switch (date.getDay()) {
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
      throw new Error();
  }
}

module.exports = weekday;
