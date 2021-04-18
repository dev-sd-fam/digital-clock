var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')

function digiClock() {
    setInterval(() => {
        var date = new Date();
        var sec = date.getSeconds();
        var min = date.getMinutes();
        var hr = date.getHours();

        sec < 10 ? second.innerHTML = `0${sec}` : second.innerHTML = sec;
        min < 10 ? minute.innerHTML = `0${min}` : minute.innerHTML = min;
        hr < 10 ? hour.innerHTML = `0${hr}` : hour.innerHTML = hr;

    }, 1000);
}

digiClock();
















