'use strict';

import { printData, printDefaultArray } from './printData';

const getPatterns = (): Array<string> => ['0', '1', '00', '11', '10', '01', '000', '001', '010', '011', '110', '111'];

const countDigits = (numbers: Array<number>, pattern: string, ) => {
    let counter: number = 0;
    const patternsArray: Array<number> = [];

    for (let i of pattern) {
        patternsArray.push(parseInt(i));
    }

    for (let i = 0; i < numbers.length; i++) {
        if (patternsArray.length === 1 && numbers[i] === patternsArray[0]) {
            counter++;
        } else if (patternsArray.length === 2 && numbers[i] === patternsArray[0] && numbers[i + 1] === patternsArray[1]) {
            counter++;
        } else if (patternsArray.length === 3 && numbers[i] === patternsArray[0] && numbers[i + 1] === patternsArray[1] && numbers[i + 2] === patternsArray[2]) {
            counter++;
        }
    }

    const percentage: number = counter / numbers.length * 100;
    printData(pattern, counter, percentage.toFixed(1));

};

const countAllDigits = (numbers: Array<number>) => {
    const patterns: Array<string> = getPatterns();
    console.log(numbers);
    printDefaultArray(numbers);

    for (let searchedDigits of patterns) {
        countDigits(numbers, searchedDigits);
    }

};


export { countAllDigits };