import {readdir} from "node:fs/promises"
import path from "node:path";

const list = async () => {
    try {
        const fileList = await readdir(path.resolve('src/fs/files/'));
        for (const file of fileList){
            console.log(file)
        }
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();