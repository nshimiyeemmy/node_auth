
import bcrypt from "bcryptjs";
const { genSalt, hash } = bcrypt;

export async function registerUser(email,password){

    //first thing is to generate the salt
   const salt = await genSalt(10)
   console.log("Generated Salt:",salt)
    //hash password with salt
   const hashedPassword = await hash(password,salt)
   console.log("hashedPassword:",hashedPassword)
    //store in the database

    //return user from the database through sending success messages

}