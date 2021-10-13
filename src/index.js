// import "./db.js";
import {fastify} from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';  // this is a default part of nodejs
import  {fileURLToPath}  from 'url';

//ESM specific features in order to get access to the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/*
import.meta is basically a new thing in ESM, it basically allowing us to get meta data about our files
*/
// console.log("hello world");
const app = fastify();
async function startApp(){
    try {

        //accessing static files with fastify server
        app.register(fastifyStatic,{
            root: path.join(__dirname,"public"),
        })
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