import {readdir} from "node:fs/promises"

const list = async () => {
    try {
        const fileList = await readdir('files/');
        for (const file of fileList){
            console.log(file)
        }
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();