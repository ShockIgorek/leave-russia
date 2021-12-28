// рандомайзер звездочек в подсказке
export const randomizerHint = (text) => {
    let arr = text.split("");
    let len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        let rand = Math.floor(Math.random() * len);
        arr[rand] = '*';
    }
    return arr.join("");

}