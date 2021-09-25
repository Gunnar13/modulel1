loadScript("js/common.js", () => {
    loadScript("https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js", () => {
        console.log("timer.js ");
    })
})
const DateTime = luxon.DateTime;
const Interval = luxon.Interval;
const start = DateTime.fromSQL("2020-06-19 11:14:00");
const finish = DateTime.fromSQL("2020-06-21 13:11:00");
const formatted = Interval
    .fromDateTimes(start, finish)
    .toDuration()
    .valueOf();
console.log(humanizeDuration(formatted))
console.log(humanizeDuration(formatted, { language: 'es' }))
console.log(humanizeDuration(formatted, { language: 'ru' }))