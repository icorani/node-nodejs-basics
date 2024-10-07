import {createReadStream} from "node:fs";
import path from "node:path";

const read = async () => {
    const stream = createReadStream(path.resolve('src/streams/files/fileToRead.txt'));
    stream.on('data', (chunk) => {
        console.log(chunk.toString());
    });

};

await read();