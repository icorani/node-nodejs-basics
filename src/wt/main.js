import {Worker} from "node:worker_threads";
import path from "node:path";
import {cpus} from 'os';


const workerPath = path.resolve('src/wt/worker.js');
const CPUCores = cpus().length;
const increment = 10;
const performCalculations = async () => {
    console.log(workerPath)
    const calcFibonacci = (workerData) =>
        new Promise((resolve) => {
            const worker = new Worker(workerPath, {workerData});
            worker.on('message',
                (data) =>
                    resolve({status: 'resolved', data}));
            worker.on('error',
                (err) => resolve({status: 'error', data: err}));
        });

    const workerCalculations = new Array(CPUCores).fill(null).map((value, index) =>
        calcFibonacci(increment + index));
    const calcResult = await Promise.all(workerCalculations);
    console.log(calcResult);
};

await performCalculations();