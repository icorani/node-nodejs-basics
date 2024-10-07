import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from "fs";
import {createGunzip} from 'node:zlib';
import path from "node:path";

const writeStream = createWriteStream(path.resolve('src/zip/files/fileToCompress.txt'));
const readStream = createReadStream(path.resolve('src/zip/files/archive.gz'));
const decompress = async () => {
    await pipeline(readStream, createGunzip(), writeStream);
};

await decompress();