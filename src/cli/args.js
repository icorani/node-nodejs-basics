import {argv} from 'node:process';

const parseArgs = () => {
    const argsList = argv;
    let resultArray = [];
    argv.slice(2,).forEach((key, index,value) => {
        if (key.startsWith('--')){
            resultArray.push(`${key.replace('--','')} is ${value[index+1]}`);
        }
    });
    console.log(resultArray.join(', '))
};

parseArgs();