import {readFile} from 'node:fs/promises'

const read = async () => {
    try{
        const fileContent = await readFile('files/fileToRead.txt', {encoding: 'utf8'});
        console.log(fileContent);
    } catch (err) {
        console.log('FS operation failed');
    }
};

await read();