import fs from "node:fs";
import path from "node:path";

const create = async () => {
    const filename = 'fresh.txt';
    const content = 'I am fresh and young';
    const pathfile = path.join('files/fresh.txt');
    console.log(pathfile)
    fs.writeFile(pathfile, content, err => {
        if (err) {
            console.error('FS operation failed', err)
        } else {
            console.log('FS is OK')
        }
    });
};

await create();