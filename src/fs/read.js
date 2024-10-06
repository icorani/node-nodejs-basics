import {readFile} from 'node:fs/promises';
import path from "node:path";

const read = async () => {
    try{
        const fileContent = await readFile(path.resolve('src/fs/files/fileToRead.txt'),
            {encoding: 'utf8'});
        console.log(fileContent);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await read();