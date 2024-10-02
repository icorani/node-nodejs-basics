// to test this func
// import { env } from 'node:process';
// env.RSS_main_question = '42'
// env.RSS_usual_deadline = '7 days'


const parseEnv = () => {
    const envList = process.env;
    for (const s in envList) {
        if (s.toString().startsWith('RSS_')) {
            console.log(s, envList[s])
        }
    }
};

parseEnv();