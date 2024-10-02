// to test this func
// import { env } from 'node:process';
// env.RSS_main_question = '42'
// env.RSS_usual_deadline = '7 days'


const parseEnv = () => {
    const envList = process.env;
    let resultString = '';
    Object.entries(envList).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) {
            resultString += `${key}=${value}; `;
        }
    });
    console.log(resultString.slice(0,-2))

};

parseEnv();