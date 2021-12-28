//реализовать появление подсказки при нажатии кнопки
//реализзовать появление слов
// реализовать проверку





import './index.css';
//тут словарь
import {
    dictionaryEng
} from './scripts/module/dictionaryEng.js'
import {
    dictionaryRus
} from './scripts/module/dictionaryRus.js'
//логика подсказок
import {
    randomizerHint
} from './scripts/module/Hint.js'

//самый главнй рандом

const sizeSelector = document.querySelector('.size');
let totalSize = Object.keys(dictionaryEng).length;



//появление вопроса
const question = document.querySelector('.question');
const watchQuestion = () => {
    question.innerHTML = dictionaryEng[mainRandom];
}
// кнопка
const checkButton = document.querySelector('.check-button');
// кнопка подсказки
const hintButton = document.querySelector('.hint__button')
// подсказка
const hint = document.querySelector('.hint')
//номер слова в разметке
const number = document.querySelector('.number')
// счётчик
const accuracy = document.querySelector('.accuracy');
//счётчик
let count = 19; //нужно для первого обновления
let trueCount = 10;
//объем словаря
let weight = 0.5;
let size = (totalSize * weight).toFixed(0)

let mainRandom = Math.floor(Math.random() * totalSize * weight) + 1;
//результат
const result = document.querySelector('.result')

// ответ
const answer = document.querySelector('.answer')
//проверка ответа
const checkAnswer = () => {
    if (answer.value.toLowerCase() === dictionaryRus[mainRandom].toLowerCase()) {
        count++
        trueCount++
        weight = trueCount / count   //(1/(1+Math.expP(-(trueCount / count) * $B$3))-0.5)*2
        size = (totalSize * weight).toFixed(0);
        result.style.color = 'green';
        result.innerHTML = dictionaryEng[mainRandom] + ' — ' + dictionaryRus[mainRandom]
        update()
    } else {
        weight = trueCount / count
        size = (totalSize * weight).toFixed(0);
        result.style.color = 'red';
        result.innerHTML = dictionaryEng[mainRandom] + ' — ' + dictionaryRus[mainRandom]
        count++
        update()
    }
}



const update = () => {
    mainRandom = Math.floor(Math.random() * totalSize * weight) + 1;
    watchQuestion()
    // заменить функцией и сделать по кнопке
    hintButton.disabled = false;
    hint.innerHTML = randomizerHint(dictionaryRus[mainRandom]);
    hintButton.addEventListener('click', () => {
        hint.style.opacity = "0.9";
        hintButton.disabled = true;
    })
    number.innerHTML = mainRandom;
    console.log(answer.value, dictionaryRus[mainRandom])
    accuracy.innerHTML = ((trueCount - 10) / (count - 20) * 100).toFixed(2) + ' %' + ' (' + (trueCount - 10) + ' / ' + (count - 20) + ' )'
    sizeSelector.innerHTML = size;


    hint.style.opacity = "0";
    answer.value = ""
}

checkButton.addEventListener('click', () => {
    checkAnswer()
})
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        checkAnswer()
    }
});
window.addEventListener('DOMContentLoaded', checkAnswer())