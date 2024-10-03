import {stdin, stdout} from 'node:process'
import {writeFile, createWriteStream} from 'node:fs'

const write = async () => {
    const file = createWriteStream('files/fileToWrite.txt')
    stdin.on('data', data => {
        file.write(data);
    })

};

await write();