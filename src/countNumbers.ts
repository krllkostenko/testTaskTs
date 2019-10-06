import printData from './printData';

const getPatterns = (): Array<string> => {
    return ['0', '1', '00', '11', '10', '01', '000', '001', '010', '011', '110', '111'];

};
const countAllDigits = (numbers: Array<number>, pattern: string,) => {
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

const countAll = (numbers: Array<number>) => {
    const patterns: Array<string> = getPatterns();
    console.log(numbers);
    for (let searchedDigits of patterns) {
        countAllDigits(numbers, searchedDigits);
    }

};


export {countAll};