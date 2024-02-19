const titleHour = document.querySelector('.top h1');
const titleDayMonth = document.querySelector('.top h3');
const plus = document.querySelector('.plus');
const timeControl = document.querySelector('input[type="time"]');
const inputCheck = document.querySelector('input[type="checkbox"]');
const insert = document.querySelector('.insert');
const btn = document.querySelector('.btn-set');
const section = document.querySelector('section');


let alarmTime;


function handleClick(cb) {
    if(cb.parentElement.parentElement.parentElement.firstElementChild.style.color != 'white') {
      cb.parentElement.parentElement.parentElement.firstElementChild.style.color = "white";
    } else {
      cb.parentElement.parentElement.parentElement.firstElementChild.style.color = "";
    } 
}

function newAlarm() {
    let alarm = `<div class="bottom">
      <article>
          <div class="hour-alarm-check">
              <div class="hour-alarm">
                  <h2>${alarmTime} ${Number(alarmTime.substring(0,2)) >= 12 ? 'PM' : 'AM'}</h2>
                  <div class="contain">
                      <div class="line"></div>
                      <label class="switch">
                          <input type="checkbox" onclick='handleClick(this);'>
                          <span class="slider round"></span>
                      </label>
                  <div>
              </div>
          </div>
      </article>
      <div class="week-list">
          <ul class="week">
              <li class="Su">Su</li>
              <li class="Mo">Mo</li>
              <li class="Tu">Tu</li>
              <li class="We">We</li>
              <li class="Th">Th</li>
              <li class="Fr">Fr</li>
              <li class="Sa">Sa</li>
          </ul>
      </div>
    `;

    section.insertAdjacentHTML('beforeend',  alarm);

}

function insertHour() {
    if (getComputedStyle(insert).display == 'flex') {
      insert.style.display = 'none';
    } else {
        insert.style.display = 'flex';
    }
}

let number = 0;
function setAlarm() {
  if(number <= 2) {
    alarmTime = timeControl.value;
    insert.style.display = 'none';
    console.log(alarmTime)
    newAlarm();
  } else {
    alert('You only can set 3 alarms, go back to sleep.');
  }
    number++;
}

plus.addEventListener('click', insertHour);
btn.addEventListener('click', setAlarm);


const nth = (d) => {
    if (d > 3 && d < 21) return 'TH';
    switch (d % 10) {
      case 1:  return "ST";
      case 2:  return "ND";
      case 3:  return "RD";
      default: return "TH";
    }
};

function tick() {
    const date = new Date();
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const month = date.toLocaleString("default", { month: "long" });

    titleHour.innerText = `${hour}:${minutes < 10 ? '0' + minutes : minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
    titleDayMonth.innerText = `${day}${nth(day)} ${month.toUpperCase()}`;

}
tick();
setInterval(tick, 60000)
