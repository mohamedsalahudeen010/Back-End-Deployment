import express from "express"

const router=express.Router();

import {client} from "./db.js"

import { objectId } from "./db.js";
import { getStudentsByParams, getStudentsByQuery, postMany, postStudent, updateStudent,deleteStudents } from "./functions.js";


//can get all Students and also can get by query
router.get("",async (req,res)=>{
    const query=req.query
    console.log(query)
    const stu=await getStudentsByQuery(query)
     
    try {
        if(stu.length<=0){
            res.status(404).send({data:"Not Found"})
        return
        }
        res.status(200).json(stu)
    } catch (error) {
        res.status(500).send({data:"Internal Server Error"})
    }
   

    // let query={};
    // if(req.query.name){
    //     const {name}=req.query;
    //     query={"name":name}
    // }else if(req.query.id){
    //     query={"id":req.query.id}
    // }
    // res.send(stu)
    //also 
})

//by using PARAMS

router.get("/:id",async (req,res)=>{
    const {id}=req.params;
    const stu=await getStudentsByParams(id)
try {
    if(stu.length<=0){
        res.status(404).send({data:"Not Found"})
    return
    }
    res.send(stu)
} catch (error) {
    res.status(500).send("Server Error")
}

    
})

// add students
router.post("",async(req,res)=>{
    const data=req.body;
    
    try {
        if(!data){
            res.send({data:"Enter Valid Input"})
            return
        }
        const stu=await postStudent(data)
        res.send(stu)
    } catch (error) {
        res.status(500).send({data:"Server Error"})
    }
    

})

// add many students
router.post("/many",async(req,res)=>{
    const data=req.body

try {
    if(!data){
        const stu=await postMany(data)
        res.send("Enter Valid Input")
        return
    }
    res.status(201).send(stu) 
} catch (error) {
    res.status(500).send("Server Error")
}
  
})

//update students


router.put("/:id",async(req,res)=>{
    const {id}=req.params;
    const updateData=req.body;

    const updatedStudent=await updateStudent(id,updateData)
    res.status(200).send(updatedStudent)
    
    
    // editStudent=studentsData.find((stud)=>stud.id===id);
    // editStudent.id= req.body.id;
    // editStudent.name= req.body.name;
    // editStudent.species= req.body.species;
    // editStudent.gender= req.body.gender;
    // editStudent.house=req.body.house;
    // editStudent.birth=req.body.birth;
    // editStudent.wand= req.body.wand;
    // editStudent.image= req.body.image; 
})

//Delete Students
router.delete("/:id",async(req,res)=>{
    const {id}=req.params;

    const stu=await deleteStudents(id)

    res.status(200).send(stu)


    // const deteteStudent=studentsData.filter((stud)=>stud.id!==id);
    // studentsData=deteteStudent;
    // res.send(studentsData)
})

export const studentRouter=router;