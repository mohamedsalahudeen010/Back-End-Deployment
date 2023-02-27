import express from "express";
// const express=require("express");
const app=express();
app.use(express.json());

import cors from "cors"
app.use(cors())
import { studentRouter } from "./student.js";
app.use("/students",studentRouter)

import dotenv from "dotenv"
dotenv.config()
const PORT=process.env.PORT;
app.listen(PORT,()=>{console.log(`1.port ${PORT} is Running`)})




app.get("/",(req,res)=>{
    res.send("2.Successfully server is hoisted")
})

app.use(express.static(`express`));
app.get("/static",(req,res)=>{
    res.sendFile(`${currentDir}/newText.txt`)
})


// const fs=require("fs");

// const path=require("path")
// console.log(`path : ${path}`)


// const currentDir=path.join(__dirname,"express")
//to create web server



//we should define "get" to hit the server






// const content="i am a file created by WriteFile"
// fs.writeFile(`${currentDir}/newText.txt`,content,(err,data)=>{
//     if(err){console.log(err)}
//     else{console.log(content)}
// })



//getting data from mongodb
//we can also access query simply give req.query in find






//by using Queries 

// app.get("/students-query",(req,res)=>{
//     const {gender}=req.query;
//     console.log(gender)
//     const selectedStudent=studentsData.filter((stud)=>stud.gender===gender);
//     res.send(selectedStudent)
// })

//middleware which allows app to use json



//<<<<<<<POST>>>>>>>>>>

// app.post("/students",(req,res)=>{
//     const data={
//         id: req.body.id,
//         name: req.body.name,
//         species: req.body.species,
//         gender: req.body.gender,
//         house:req.body.house,
//         birth:req.body.birth,
//         wand: req.body.wand,
//         image: req.body.image,  
//     }
//     studentsData.push(data);
//     res.send(studentsData)
// })



