import express from "express";
import cors from "cors"

import router from "./routes/index.js";

import {pool} from "./common/model/mysql.js"



const app = express()

app.use(cors())
app.use(express.json());

app.get('/ping', async (req, res, next)=>{
    const result = await pool.query("SELECT 1+1 AS result")
   res.json({result})


})
app.use('/',router.task)

app.use((req,res,next)=>{
    res.status(404).json({message:"not found"})
})
export default app;