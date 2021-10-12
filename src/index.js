// import "./db.js";
import {fastify} from 'fastify'
// console.log("hello world");
const app = fastify();
async function startApp(){
    try {
        await app.listen(3000);
        console.log("server listening on port 3000")
    } catch (error) {
        console.error('error',error)
    }
}
startApp();