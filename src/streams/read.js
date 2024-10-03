import {createReadStream} from "node:fs";

const read = async () => {
    const stream = createReadStream('files/fileToRead.txt');
    stream.on('data', (chunk) => {
        console.log(chunk.toString());
    });

};

await read();