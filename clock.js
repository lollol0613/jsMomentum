const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    dateTitle = document.querySelector(".js-date");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getDate() {
    const getdays = new Date();
    const month = getdays.getMonth();
    const days = getdays.getDate();
    const day = getdays.getDay();
    const weekdays = new Array(7);
    const months = new Array(12);

    weekdays[0] = "SUN";
    weekdays[1] = "MON";
    weekdays[2] = "TUE";
    weekdays[3] = "WED";
    weekdays[4] = "THU";
    weekdays[5] = "FRI";
    weekdays[6] = "SAT";

    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    const weekday = weekdays[day];
    const whichmonth = months[month];

    dateTitle.innerText = `${weekday}, ${days} ${whichmonth}`;
}

function init() {
    getTime();
    getDate();
    setInterval(getTime, 1000);
}

init();