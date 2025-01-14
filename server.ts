import { app } from "./app"
import connectDB from "./utils/db"
require("dotenv").config()


// create server
const PORTER = process.env.PORT

app.listen(PORTER, () =>{
    console.log(`Server is connected with port ${PORTER}`)
    connectDB()
})