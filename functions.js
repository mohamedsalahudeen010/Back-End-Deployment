import { client } from "./db.js"
import { objectId } from "./db.js"

//Get students by query
export const getStudentsByQuery=(query)=>{
    return client
    .db("guvi")
    .collection("students")
    .find(query)
    .toArray()
}

//Get students by params
export const getStudentsByParams=(params)=>{
    return client
    .db("guvi")
    .collection("students")
    .find({_id:new objectId(params)})
    .toArray();
}


//Add (post) student

export const postStudent=(data)=>{
    return client
    .db("guvi")
    .collection("students")
    .insertOne(data)
}


//AddMany(post) Students

export const postMany=(data)=>{
    return client
.db("guvi")
 .collection("students")
.insertMany(data)
}


//Update Students

export const updateStudent=(id,updateData)=>{
    return client
    .db("guvi")
    .collection("students")
    .updateOne({_id:new objectId(id)},{$set:updateData})
}

//Delete Students

export const deleteStudents=(id)=>{
    return client
    .db("guvi").collection("students")
    .deleteOne({_id:new objectId(id)})
}