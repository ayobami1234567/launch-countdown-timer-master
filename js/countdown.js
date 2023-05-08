const getRemainTime = (deadline) => {

    let now = new Date();

    let remainTime = (new Date(deadline) - now + 1000) / 1000;

    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    let remainDays = ('0' + Math.floor(remainTime / (3600 * 24)));

    return { remainTime, remainSeconds, remainMinutes, remainHours, remainDays };
}

const countdown = (deadline) => {

    const days = document.getElementById('days-amount');
    const hours = document.getElementById('hours-amount');
    const minutes = document.getElementById('minutes-amount');
    const seconds = document.getElementById('seconds-amount');

    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
 
        days.textContent = time.remainDays;
        hours.textContent = time.remainHours;
        minutes.textContent = time.remainMinutes;
        seconds.textContent = time.remainSeconds;

    }, 1000);
}

const date = new Date();

date.setDate(date.getDate() + 8);
date.setHours(date.getHours() + 23);
date.setMinutes(date.getMinutes() + 55);
date.setSeconds(date.getSeconds() + 41);

countdown(date);