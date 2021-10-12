// import "./db.js";
import {fastify} from 'fastify'
// console.log("hello world");
const app = fastify();
async function startApp(){
    try {

        //creating our first request
        app.get("/",{},(request,response)=>{
             response.send({
                 data:'Hello world', 
             }) // fastify sending response containing an object with data property
        })

        await app.listen(3000);
        console.log("server listening on port 3000")
    } catch (error) {
        console.error('error',error)
    }
}
startApp();