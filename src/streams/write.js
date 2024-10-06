import {stdin} from 'node:process'
import {createWriteStream} from 'node:fs'

const write = async () => {
    const fileWriteStream =
        createWriteStream('src/streams/files/fileToWrite.txt', {flags: 'a'})
    await stdin.on('data', data => {
        fileWriteStream.write(data);
    })

};

await write();