import fs from "node:fs";
import {writeFile, stat} from "fs/promises";
import path from "node:path";


const filename = 'fresh.txt';
const content = 'I am fresh and young';
const pathfile = path.resolve('src/fs/files/fresh.txt');

const create = async () => {
    try {
        await writeFile(pathfile, content, {flag: 'wx'});
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await create();