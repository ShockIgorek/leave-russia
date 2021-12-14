import './index.css';


const hint = document.querySelector('.hint');
const checkButton = document.querySelector('.check-button');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer')

let responseCount = 0;
let trueCount = 0;
let stockCount = 0.5;



//тут словарь
import {dictionaryEng} from './scripts/module/dictionaryEng.js'
import {dictionaryRus} from './scripts/module/dictionaryRus.js'




let randomizerHint = (text) => {
    let arr = text.split("");
    let len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        let rand = Math.floor(Math.random() * len);
        arr[rand] = '*';
    }
    return arr.join("");

}

let opacity = (selector) => {
    selector.style.opacity = 1;
}
let resetOpacity = (selector) => {
    selector.style.opacity = 0;
}

let random = Math.floor(Math.random() * (Object.keys(dictionaryEng).length))
let check = () => {
    let ans = answer.value.toLowerCase();
    let quest = dictionaryRus[random].toLowerCase();

    if (ans === quest) {
        trueCount++
        update()
    } else {
        update()
    }
}


let update = () => {
    random = Math.floor(Math.random() * (Object.keys(dictionaryEng).length))
    resetOpacity(question);
    resetOpacity(hint);
    // let rand = Math.floor(Math.random() * (Object.keys(dictionaryEng).length));
    setTimeout(() => {
        opacity(question);
        hint.style.opacity = 0.3;
        question.textContent = dictionaryEng[random];
        hint.textContent = randomizerHint(dictionaryRus[random]);

        responseCount = responseCount + 1;
        answer.value = ""
    }, 400);
    stockCount = trueCount / responseCount;
    console.log(stockCount)
    speed()
}


window.addEventListener('load', update);
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        check()
    }
});
checkButton.addEventListener('click', update);




//спижометр
const speed = () => {
    let rand = stockCount * 200 - 100;
    document.querySelector(".arrow").style.transform = `rotate(${rand}deg`;
    num.innerHTML = Math.round(stockCount * 100) + "%"
};