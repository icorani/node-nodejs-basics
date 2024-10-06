const envList = process.env;

const parseEnv = () => {
    let resultArray = [];
    Object.entries(envList).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) {
            resultArray.push(`${key}=${value}`);
        }
    });
    console.log(resultArray.join(', '))

};

parseEnv();