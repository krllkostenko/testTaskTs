'use strict';
const printData = (digits: string, amount: number, percentage: string) => {
    const results = document.getElementById('results');
    if (results) {
        results.innerHTML += `</br>Amount of ${digits}s = ${amount} or ( ${percentage}% )<br>`;
        console.log(`Amount of ${digits}s = ${amount} (or ${percentage}% )`);
    }
};

const printDefaultArray = (arr: Array<number>) => {
    const defaultArray = document.getElementById('default-string');
    if (defaultArray) {
        defaultArray.innerHTML = `Total amount of 1s and 0s: ${arr.length}`;
    }
};

export { printData, printDefaultArray };