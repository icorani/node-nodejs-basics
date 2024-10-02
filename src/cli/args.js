import {argv} from 'node:process';

const parseArgs = () => {
    const argsList = argv;
    argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
    });
};

parseArgs();