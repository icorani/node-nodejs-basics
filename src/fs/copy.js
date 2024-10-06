import path from "node:path";
import {existsSync} from 'node:fs';
import {cp} from 'node:fs/promises';


const sourcePath = path.resolve('src/fs/files/.');
const destPath = path.resolve('src/fs/files_copy/.');

const copy = async () => {
    if ((existsSync(destPath)) || (!existsSync(sourcePath))) {
        throw Error('FS operation failed')}
    try {
            await cp(sourcePath, destPath,
                {
                    errorOnExist: true,
                    recursive: true,
                })
        } catch (err) {
            console.log(err)
            // throw Error('FS operation failed');
        }
    }

await copy();
