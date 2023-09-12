// approve or pending donor

import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, {params}) =>{
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
//   console.log(id)
  
    return NextResponse.json(result,{message:"Updated"})
  }
  