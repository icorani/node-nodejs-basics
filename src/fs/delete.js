import {unlink} from "node:fs/promises"
const remove = async () => {
    try {
        await unlink('files/fileToRemove.txt');
    } catch (err) {
        console.error('FS operation failed')
    }

};

await remove();