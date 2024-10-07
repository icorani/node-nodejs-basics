import fs from "node:fs";

const rename = async () => {
    const srcFile = 'files/wrongFilename.txt';
    const destFile = 'files/properFilename.md';
    fs.rename(srcFile, destFile, err => {
        if (err) {
            console.error('FS operation failed');
        }
    });
};

await rename();