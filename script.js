//days hours minitues
// 01 Jan 00:00

let cDay;
let cHour;
let cMin;
let cSec;

let interval = window.setInterval(function (params) {

    let cDate = new Date();
    cHour = cDate.getHours();
    cmin = cDate.getMinutes();
    cSec =cDate.getSeconds();
    cDay = cDate.getDate();
    //console,console.log();


    document.getElementById('sec').innerHTML=60-cSec;
    document.getElementById('min').innerHTML=60-cmin;
    document.getElementById('hours').innerHTML=24-cHour;
    document.getElementById('days').innerHTML=365-cDay;

},1000);

