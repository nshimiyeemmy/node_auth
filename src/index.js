// import "./db.js";
import "./env.js";
import {fastify} from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';  // this is a default part of nodejs
import  {fileURLToPath}  from 'url';
import { connectToDatabase} from './db.js';
import { registerUser } from "./accounts/register.js";
import { loginUser } from "./accounts/login.js";



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

        //post request for registering the user
        app.post("/api/register",{}, async(request,response)=>{
            try {
              const userId =  await registerUser(request.body.email,request.body.password);
               console.log("userId:",userId); 
            } catch (error) {
               console.error(error) 
            }
        })
        // post request for signing in users
        //authentication is just to confirm that the users are who they say they are
        app.post("/api/login",{}, async(request,response)=>{
            try {
                console.log(request.body.email,request.body.password); 
              const userId =  await loginUser(request.body.email,request.body.password);
            } catch (error) {
               console.error(error) 
            }
        })
        await app.listen(process.env.PORT);
        console.log("⚡ server listening on port 4000") // wait for the app to listen on port 3000 and when done console.log()
    } catch (error) {
        console.error('error',error)
    }
}
connectToDatabase().then(()=>{
    startApp();
})