//days hours minitues
// 01 Jan 00:00

let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let cyear;
let daysPeryear;
let daysinfeb;

let interval = window.setInterval(function (params) {
  let cDate = new Date();
  cHour = cDate.getHours();
  cmin = cDate.getMinutes();
  cSec = cDate.getSeconds();
  cDay = cDate.getDate();
  cMonth = cDate.getMonth()+1;
  cyear = cDate.getFullYear();
  //console,console.log();

  //Check long year
  if (cyear % 4 == 0) {
    daysPeryear = 366;
    daysinfeb = 29;
  } else {
    daysPeryear = 365;
    daysinfeb = 28;
  }

  switch (cMonth) {
    case 1:
      daysLeft = daysPeryear;
    case 2:
      daysLeft = daysPeryear - 31;
      break;
    case 3:
      daysLeft = daysPeryear - (31 + daysinfeb);
      break;
    case 4:
      daysLeft = daysPeryear - (62 + daysinfeb);
      break;
    case 5:
      daysLeft = daysPeryear - (92 + daysinfeb);
      break;
    case 6:
      daysLeft = daysPeryear - (123 + daysinfeb);
      break;
    case 7:
      daysLeft = daysPeryear - (153 + daysinfeb);
      break;
    case 8:
      daysLeft = daysPeryear - (184 + daysinfeb);
      break;
    case 9:
      daysLeft = daysPeryear - (215 + daysinfeb);
      break;
    case 10:
      daysLeft = daysPeryear - (245 + daysinfeb);
      break;
    case 11:
      daysLeft = daysPeryear - (276 + daysinfeb);
      break;
    case 12:
      daysLeft = daysPeryear - (306 + daysinfeb);
      break;
  }

  document.getElementById("sec").innerHTML = 60 - cSec;
  document.getElementById("min").innerHTML = 60 - cmin;
  document.getElementById("hours").innerHTML = 24 - cHour;
  document.getElementById("days").innerHTML = daysLeft - cDay;
}, 1000);
