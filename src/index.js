import './index.css';
//тут словарь
import {
    dictionaryEng
} from './scripts/module/dictionaryEng.js'
import {
    dictionaryRus
} from './scripts/module/dictionaryRus.js'
//самый главнй рандом
let size = Object.keys(dictionaryEng).length;
let mainRandom = Math.floor(Math.random() * size);
const resetRandom = () => {
    mainRandom = Math.floor(Math.random() * size);
}
// подсказка
const hint = document.querySelector('.hint')

document.addEventListener('click', () => {
    console.log(mainRandom)
    hint.innerHTML = dictionaryRus[mainRandom]
    resetRandom()

})