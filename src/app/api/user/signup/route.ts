import { connect } from "@/dbConfig/dbConfig";
import User from "@/modals/userModal";
//this is used fro res and req
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcrypt"


connect()

export async function POST(request:NextRequest)
{
    try{
            const reqBody = await request.json()
            // you can handle all the validation 
            const { username,email,password} = reqBody
            console.log(reqBody)
            //check if user already 
            // this user is not defines in the d

       const user =   await User.findOne({email})
       if(user) return NextResponse.json({error:"user already exists"},{status:400});

    //    hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

  const newUser =  new User({
        username,
        email,
        password:hashedPassword
    })

    const savedUser = await newUser.save()
    console.log(savedUser,"the user has been saved to db")

    return NextResponse.json({
        message:"user created successfully",
        success:true,
        savedUser
    })

       }
    
    catch(err:any){
        return NextResponse.json({err:err.message})
    }
}