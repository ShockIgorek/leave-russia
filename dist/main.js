(()=>{"use strict";var e={0:"Time",1:"Year",2:"People",3:"Way",4:"Day",5:"Man",6:"Thing",7:"Woman",8:"Life",9:"Child",10:"School",11:"State",12:"Family",13:"Student",14:"Group",15:"Country",16:"Problem",17:"Hand",18:"Part",19:"Place",20:"Case",21:"Week",22:"Company",23:"System",24:"Program",25:"Question",26:"Work",27:"Government",28:"Number",29:"Night",30:"Point",31:"Home",32:"Water",33:"Room",34:"Mother"},t={0:"Время",1:"Год",2:"Люди",3:"Путь",4:"День",5:"Мужик",6:"Вещь",7:"Дама",8:"Жизнь",9:"Ребенок",10:"Школа",11:"Штат",12:"Семья",13:"Студент",14:"Группа",15:"Страна",16:"Проблема",17:"Рука",18:"часть",19:"место",20:"Ситуация",21:"Неделя",22:"Компания",23:"Система",24:"Программа",25:"Вопрос",26:"Работа",27:"Правительство",28:"Номер",29:"Ночь",30:"Точка",31:"Дом",32:"Вода",33:"Комната",34:"Мать"},o=document.querySelector(".hint"),n=document.querySelector(".check-button"),r=document.querySelector(".question"),a=document.querySelector(".answer"),c=0,i=0,u=.5,l=function(e){e.style.opacity=0},d=Math.floor(Math.random()*Object.keys(e).length),m=function(){d=Math.floor(Math.random()*Object.keys(e).length),l(r),l(o),setTimeout((function(){r.style.opacity=1,o.style.opacity=.3,r.textContent=e[d],o.textContent=function(e){for(var t=e.split(""),o=t.length,n=0;n<o/2;n++)t[Math.floor(Math.random()*o)]="*";return t.join("")}(t[d]),c+=1,a.value=""}),400),u=i/c,console.log(u),s()};window.addEventListener("load",m),window.addEventListener("keydown",(function(e){13===e.keyCode&&(a.value.toLowerCase()===t[d].toLowerCase()?(i++,m()):m())})),n.addEventListener("click",m);var s=function(){var e=200*u-100;document.querySelector(".arrow").style.transform="rotate(".concat(e,"deg"),num.innerHTML=Math.round(100*u)+"%"}})();