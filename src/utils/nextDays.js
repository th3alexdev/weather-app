
export default function setNextDays() {
  const date = new Date();
  const nextDate = new Date();

  let nextDayOfWeekShort, nextDayOfWeekLarge;
  let nextDays = [];

  // Get the short and long names of the current day of the week
  nextDayOfWeekShort = date.toLocaleDateString('en-EN', {
    weekday: 'short'
  }).split(',')[0];
  nextDayOfWeekLarge = date.toLocaleDateString('en-EN', {
    weekday: 'long'
  }).split(',')[0];

  // Add the current day of the week to the nextDays array
  nextDays.push({
    short: nextDayOfWeekShort,
    long: nextDayOfWeekLarge
  });

  // Calculate and add the next 8 days of the week to the nextDays array
  for (let i = 1; i < 9; i++) {
    nextDate.setDate(date.getDate() + i);
    nextDayOfWeekShort = nextDate.toLocaleDateString('en-EN', {
      weekday: 'short'
    }).split(',')[0];
    nextDayOfWeekLarge = nextDate.toLocaleDateString('en-EN', {
      weekday: 'long'
    }).split(',')[0];

    nextDays.push({
      short: nextDayOfWeekShort,
      long: nextDayOfWeekLarge
    });
  }

  return nextDays;
}