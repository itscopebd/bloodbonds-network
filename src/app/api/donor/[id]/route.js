// approve or pending donor
import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PUT = async (request, {params}) =>{
    const {id}= params;
   const body = await request.json();
   const query ={_id: new ObjectId(id)}
   const { db } = await connectToDatabase();
   const result = await db.collection('donors').updateOne(
    query,
   {$set:{
    status:body
   }}
  );
    return NextResponse.json(result,{message:"Updated"})
  }


  
  // delete donor 
export const DELETE = async (request, {params}) =>{
    const {id}= params;
  //  const body = await request.json();
   const query ={_id: new ObjectId(id)}
   const { db } = await connectToDatabase();
   const result = await db.collection('donors').deleteOne(query);
    return NextResponse.json(result,{message:"Delete Sucesss"})
  }
  