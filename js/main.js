//loadScript("js/load.js", () => {
//console.log('main.js');
import { printOutput } from "./output.js";
import { ttt, diffDates, diffToHtml, getCountdown, } from "./datecalc.js";

const dateCalcForm = document.getElementById("datecalc");    //выбрать блоки с которыми работать
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);
//let firstDate, secondDate;
//const timer4 = document.getElementById("timer3");
//const timer = document.getElementById("timer1");
//timer.addEventListener("submit", outTimer);

const timer6 = document.getElementById("timer6");
const mytimer = document.getElementById("mytimer");
mytimer.addEventListener("submit", outTimer2);
const stopButton = document.getElementById("stopbtn");
stopButton.addEventListener("click", ddddd);
const clearButton = document.getElementById("clearbtn");
clearButton.addEventListener("click", clear);
let timerId = null;

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();    //чтобы не было перезагрузки страницы

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }

    else {
        printOutput("Для расчета промежутка необходимо заполнить оба поля");
        //else console.log("Для расчета промежутка необходимо заполнить оба поля");
        //dateCalcResult.innerHTML = printOutput("Для расчета промежутка необходимо заполнить оба поля");;
        return
    }

}
function outTimer2(event) {
    timer6.innerHTML = ' ';
    event.preventDefault();
    let { timer2 } = event.target.elements;
    timer2 = timer2.value;
    let t3 = ttt(timer2);

    let timerid = start(timer6, t3);
    //timerId = setInterval(() => getCountdown(timer6, t3), 1000);
    return

}

function start(timer6, t3) {
    //alert('hello');
    timerId = setInterval(() => getCountdown(timer6, t3), 1000);
}



function ddddd() {
    //alert('stop');
    clearInterval(timerId)
    return
}
function clear() {
    timer6.innerHTML = '00:00:00 ';

}
/*
function getCountdown1() {
    //getCurTime = Duration.fromObject(getCurTime).as('seconds');
    let i = 1;
    //getCurTime = getCurTime - 1;
    //getCountdown(i);
    timer6.innerHTML = i;
    i++;
    /*let t2 = DateTime.local();
    getCurTime = Duration.fromObject({
        hours: (getCurTime - (getCurTime % 3600)) / 3600,
        minutes: ((getCurTime % 3600) - (getCurTime % 3600) % 60) / 60,
        seconds: (getCurTime - (getCurTime - (getCurTime % 3600)) - ((getCurTime % 3600) - (getCurTime % 3600) % 60))
    }).toObject();

    //timerToHtml(getCurTime);
    getCurTime = Duration.fromObject(getCurTime).as('seconds');
    return getCurTime -= 1;
    return `<span>  ${i + 1}</span>`;
}
*/

/*
var target_date = new Date().getTime() + (1000 * 3600 * 48); // установить дату обратного отсчета
var days, hours, minutes, seconds; // переменные для единиц времени

var countdown = document.getElementById("tiles"); // получить элемент тега

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown() {

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // строка обратного отсчета  + значение тега
    countdown.innerHTML = "<span>" + days + "</span><span>" + ":" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
*/