import {fork} from 'node:child_process';
import path from "node:path";
import process from 'node:process';

const childScriptPath = path.resolve('src/cp/files/script.js')
const spawnChildProcess = async (args) => {
    const childProcess =
        fork(childScriptPath, [args], {stdio: 'inherit'});
    //'inherit option in stdio option is mean pass tru the corresponding parent process i/o stream
};

// Put your arguments in function call to test this functionality
spawnChildProcess();
