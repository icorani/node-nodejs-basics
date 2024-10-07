import {readFile, } from 'fs/promises';

const {createHash, } = await import ('node:crypto');
const filename = 'src/hash/files/fileToCalculateHashFor.txt'
const hash = createHash('sha256')

const calculateHash = async () => {
    const content = await readFile(filename);
    hash.update(content);
    console.log(`${hash.digest('hex')}`)
};

await calculateHash();