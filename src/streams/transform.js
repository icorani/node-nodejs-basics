import {Transform} from 'stream';
import {pipeline} from 'stream/promises';


const transFormFunc = (str) => str.split('').reverse().join('') + '\n';

const transform = async () => {
    const transFormStream = new Transform({
            transform(chunk, encoding, callback) {
                callback(null, transFormFunc(chunk.toString()))
            },
        });
    await pipeline(process.stdin, transFormStream, process.stdout)
};

await transform();