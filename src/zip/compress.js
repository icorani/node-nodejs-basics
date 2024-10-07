import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from "fs";
import {createGzip} from 'node:zlib';
import path from "node:path";

const readStream = createReadStream(path.resolve('src/zip/files/fileToCompress.txt'));
const writeStream = createWriteStream(path.resolve('src/zip/files/archive.gz'));
const compress = async () => {
    await pipeline(
        readStream, createGzip(),writeStream
    )
};

await compress();