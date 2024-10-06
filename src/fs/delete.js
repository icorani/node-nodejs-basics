import {rm} from "node:fs/promises"
import path from "node:path";

const filePath = path.resolve('src/fs/files/fileToRemove.txt');

const remove = async () => {
    try {
        await rm(filePath);
    } catch (err) {
        console.error('FS operation failed')
    }

};

await remove();