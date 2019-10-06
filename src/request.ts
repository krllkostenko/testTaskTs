'use strict';

import axios from 'axios';
import { countAllDigits } from './countNumbers';

const getRandomNumbers = () => {
    axios({
        method: 'post',
        url: 'https://api.random.org/json-rpc/1/invoke',
        data: {
            "jsonrpc": "2.0",
            "method": "generateSignedIntegers",
            "params": {
                "apiKey": "e9d16d00-d2f6-4103-bf7e-8e36054fb83b",
                "n": 10000,
                "min": 0,
                "max": 1,
                "replacement": true
            },
            "id": 10720
        }
    })
        .then((response) => {
            let randomNumbers: Array<number> = response.data.result.random.data;
            const millionDigitsArray = arrayParseInt(randomNumbers.toString().repeat(100).replace(/,/g, ''));
            countAllDigits(millionDigitsArray);
        })
        .catch((error) => console.log(`Error: ${error}`));

};


const arrayParseInt = (array: string) => {
    const newArray: Array<number> = [];
    for (let i of array) {
        newArray.push(parseInt(i));
    }
    return newArray;
};

export default getRandomNumbers;