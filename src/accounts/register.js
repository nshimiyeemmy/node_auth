
import bcrypt from "bcryptjs";
const { genSalt, hash } = bcrypt;

export async function registerUser(email,password){
   
    const { user } = await import('../user/user.js') // updated with using the dynamic import to avoid the loading order errors

    //first thing is to generate the salt
   const salt = await genSalt(10)
//    console.log("Generated Salt:",salt)

    //hash password with salt
   const hashedPassword = await hash(password,salt)
//    console.log("hashedPassword:",hashedPassword)

    //store in the database
   const result =  await user.insertOne({
      email:{
        address:email,
        verified:false  
      },
      password:hashedPassword
  })
    //return user from the database through sending success messages
    return result.insertedId

}