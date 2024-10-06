import {createReadStream, } from 'node:fs';

const {createHash, } = await import ('node:crypto');
const filename = 'src/hash/files/fileToCalculateHashFor.txt'
const hash = createHash('sha256')

const calculateHash = async () => {
    const readStream = createReadStream(filename);
    readStream.on('readable', ()=>{
        const data = readStream.read();
        if (data)
            hash.update(data);
        else
            console.log(`${hash.digest('hex')}`)
    })
};

await calculateHash();