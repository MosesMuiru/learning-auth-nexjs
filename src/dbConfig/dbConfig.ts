import mongoose from "mongoose"


export async function connect(){
    try{
        mongoose.connect("mongodb+srv://muirumoses9:welcome2@cluster0.qberrvt.mongodb.net/?retryWrites=true&w=majority")
        const connection = mongoose.connection

        connection.on("connected",() => {
            console.log("MONGODB CONNECTED SUCCESSFULLY")
        })
    }
    catch(err){
        console.log("db is not connect")
        console.log(err)
    }

}
