const question = document.querySelector('.question')
const hint = document.querySelector('.hint')
const checkButton = document.querySelector('.check-button')
//тут словарь
const dictionaryEng = {
    0: "Time", // под ключом "name" хранится значение "John"
    1: "Year",
    2: "People",
    3: "Way",
    4: "Day",
    5: "Man",
    6: "Thing",
    7: "Woman",
    8: "Life",
    9: "Child",
    10: "World",
}

const dictionaryRus = {
    0: "Время", // под ключом "name" хранится значение "John"
    1: "Год",
    2: "Люди",
    3: "Путь",
    4: "День",
    5: "Мужик",
    6: "Вещь",
    7: "Дама",
    8: "Жизнь",
    9: "Ребенок",
    10: "Мир",
}


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


let update = () => {
    resetOpacity(question);
    resetOpacity(hint);
    let rand = Math.floor(Math.random() * (Object.keys(dictionaryEng).length));
    setTimeout(() => {
        opacity(question);
        hint.style.opacity = 0.3;
        question.textContent = dictionaryEng[rand];
        hint.textContent = randomizerHint(dictionaryRus[rand]);
    }, 400);

}


window.addEventListener('load', update);
checkButton.addEventListener('click', update);




















//спижометр
checkButton.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * 200 - 100);
    document.querySelector(".arrow").style.transform = `rotate(${rand}deg`;
    num.innerHTML = parseInt((230 * (Number(rand) + 100)) / 180);
});








