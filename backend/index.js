import express from "express";
import mysql from "mysql";


const app = express();


const db = mysql.createConnection({
    host : "localhost",
    port : "3307",
    user : "root",
    password:"",
    database : "react-mysql demo"
})

app.get("/", (req,res)=>{
    res.json('hello this is the backend')
})

app.get("/books",(req,res)=>{
    const q = "SELECT * FROM test";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    });

})

app.listen(8800,()=>{
    console.log('connected to backend')
})