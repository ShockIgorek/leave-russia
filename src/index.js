import './index.css';
//тут словарь
import {
    dictionaryEng
} from './scripts/module/dictionaryEng.js'
import {
    dictionaryRus
} from './scripts/module/dictionaryRus.js'
//логика подсказок
import {randomizerHint} from './scripts/module/Hint.js'

//самый главнй рандом
let size = Object.keys(dictionaryEng).length;
let mainRandom = Math.floor(Math.random() * size);
const resetRandom = () => {
    mainRandom = Math.floor(Math.random() * size);
}
// подсказка
const hint = document.querySelector('.hint')
//номер слова в разметке
const number = document.querySelector('.number')
document.addEventListener('click', () => {
    hint.innerHTML = randomizerHint(dictionaryRus[mainRandom]);
    number.innerHTML = mainRandom;
    resetRandom()

})