import {createReadStream, } from 'node:fs';

const {createHash, } = await import ('node:crypto');
const filename = 'files/fileToCalculateHashFor.txt'
const hash = createHash('sha256')

const calculateHash = async () => {
    const input = createReadStream(filename);
    input.on('readable', ()=>{
        const data = input.read();
        if (data)
            hash.update(data);
        else
            console.log(`${hash.digest('hex')}`)
    })
};

await calculateHash();