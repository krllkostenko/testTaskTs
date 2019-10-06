import axios from 'axios';
import {countAll} from './countNumbers';

const getRandomNumbers = () => {
    axios({
        method: 'post',
        url: 'https://api.random.org/json-rpc/1/invoke',
        data: {
            "jsonrpc": "2.0",
            "method": "generateSignedIntegers",
            "params": {
                "apiKey": "d9dcfb0c-ab6a-46e2-8013-db7cfd4109ab",
                "n": 10000,
                "min": 0,
                "max": 1,
                "replacement": true
            },
            "id": 10720
        }
    })
        .then((response) => {
            const randomNumbers: Array<number> = response.data.result.random.data;
            countAll(randomNumbers);
        })
        .catch((error) => console.log(`Error: ${error}`));
};

export default getRandomNumbers;