import path from "node:path";
import { copyFile, constants } from 'node:fs/promises';

const fromPath = path.resolve('src/fs/files/.');
const goalPath = path.resolve('src/fs/files_copy/.');

const copy = async () => {
    try {
        await copyFile(fromPath, goalPath,constants.COPYFILE_EXCL)
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await copy();
