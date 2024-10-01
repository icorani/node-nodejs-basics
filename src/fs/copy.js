import path from "node:path";
import fs from "node:fs";

const copy = async () => {
    const fromPath = path.dirname('files/.');
    const goalPath = path.dirname('files_copy/.');
    fs.cp(fromPath, goalPath,
        {recursive: true},
            err => {
        if (err) {
            console.error("FS operation failed", err)
        }
    });
};

await copy();
