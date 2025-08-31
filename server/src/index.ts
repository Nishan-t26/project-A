import express, { type NextFunction, type Request,type Response } from "express"
import todoRoutes from "./routes/todo.js"
import bodyParser from "body-parser"

const app =express()
const port=8080

app.use(bodyParser.json())

app.use("/todo",todoRoutes)

app.use((err: Error, req: Request,res : Response,next: NextFunction )=>{
    console.log("error")
    res.status(500).json({message: err.message})
})

app.listen(port,()=>{
    console.log("server start")
})