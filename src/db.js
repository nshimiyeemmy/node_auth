import mongo from 'mongodb';

const {MongoClient} = mongo
const url = process.env.MONGO_URL

export const client = new MongoClient(url,{ useNewUrlParser : true })

//create a function to connect to hte database after grabbing our database connection string
export async function connectToDatabase(){
    try {
        await client.connect() // connecting to the actual database
      
        //confirm connection 
        await client.db("admin").command({ping : 1});
        console.log("🔥 Connected to the Database Successfully")
    } catch (error) {
console.error(error);
await client.close(); // if there is a problem close connection to the database 
    }
}

