import {argv} from 'node:process';

const parseArgs = () => {
    const argsList = argv;
    let resultString = '';
    let stats = 2;
    argv.slice(2,).forEach((key, value) => {
        key = key.slice(2,);
        if (stats === 2) {
            resultString += `${key} is `;
            stats = 1;
        } else {
            resultString += `${value}, `;
            stats = 2;
        }
    });
    console.log(resultString.slice(0,-2))
};

parseArgs();