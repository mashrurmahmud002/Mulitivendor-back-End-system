import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

import app from './app.js'


const port = process.env.PORT || 5000



const startServer = async()=>{
    try{
        await connectDB();
        app.listen(port, console.log(`Server is running on port ${port}`));

    }catch(error){
        console.log(error)
    }

}


startServer();