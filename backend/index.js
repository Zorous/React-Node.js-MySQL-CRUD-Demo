import express from "express";
import mysql from "mysql";


const app = express();


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password:"",
    database : "react-mysql demo"
})

app.get("/", (req,res)=>{
    res.json('hello this is the backend')
})


app.listen(8800,()=>{
    console.log('connected to backend')
})