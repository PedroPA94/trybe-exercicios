function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.


 // Exercício 1

function createCalendarDays () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.getElementById('days');

    for (let i in dezDaysList) {
        const day = dezDaysList[i];
        const daysListItem = document.createElement('li');
        daysListItem.innerHTML = day;
        daysListItem.classList.add("day");
        
        if ([24, 25, 31].includes(day)) {
            daysListItem.classList.add("holiday");
        }

        if ([4, 11, 18, 25].includes(day)) {
            daysListItem.classList.add("friday");
        }

        daysList.appendChild(daysListItem);
    }
}

createCalendarDays();

// Exercício 2

function holidays(str) {
    const btn = document.createElement('button');
    btn.innerText = str;
    btn.id = 'btn-holiday';

    document.querySelector('.buttons-container').appendChild(btn);   
}

const strHoliday = 'Feriados'

holidays(strHoliday);

// Exercício 3

document.getElementById('btn-holiday').addEventListener('click', function () {
    let holidays = document.querySelectorAll('.holiday');
    let bgColor = 'rgb(238,238,238)';
    let newColor = 'yellow';
    for (let i in holidays) {
        if (holidays[i].style.backgroundColor === newColor) {
            holidays[i].style.backgroundColor = bgColor;
        } else {
            holidays[i].style.backgroundColor = newColor;
        }
    }
});

// Exercício 4

function friday(str) {
    const btn = document.createElement('button');
    btn.id = 'btn-friday';
    btn.innerText = str;

    document.querySelector('.buttons-container').appendChild(btn);
}

const strFriday = 'Sexta-feira';

friday(strFriday);

// Exercício 5

document.getElementById('btn-friday').addEventListener('click', function () {
    let fridays = document.querySelectorAll('.friday');
    let sextou = "SEXTOU!";
    let originalDays = [4, 11, 18, 25];

    for (let i in fridays) {
        if (fridays[i].innerText === sextou) {
            fridays[i].innerText = originalDays[i];
        } else {
            fridays[i].innerText = sextou;
        }
    }
});

// Exercício 6

function zoomIn() {
    let days = document.getElementById('days');

    days.addEventListener('mouseover', function (e) {
        e.target.style.fontSize = '2em';
    });
    
}

function zoomOut() {
    let days = document.getElementById('days');

    days.addEventListener('mouseout', function (e) {
        e.target.style.fontSize = '1em';
    });

}

zoomIn();
zoomOut();