
export default function setNextDays() {

    const date = new Date();
    const nextDate = new Date();
    const options = { weekday: 'short' };

    let nextDayOfWeek;
    let nextDays = [date];
    
    for (let i = 1; i < 9; i++) {
        nextDate.setDate(date.getDate() + i);
        nextDayOfWeek = nextDate.toLocaleDateString('en-EN',   options).split(',')[0];
        nextDays.push(nextDayOfWeek)
    }

    return nextDays
}
