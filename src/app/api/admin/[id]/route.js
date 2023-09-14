// user update 

import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PUT= async (request, { params })=> {
    const { id } = params;
    const data = await request.json()
    const query = { _id: new ObjectId(id) };
    const { db } = await connectToDatabase();
    const result = await db.collection("users").updateOne(query, {
      $set: {
        role:data
      },
    });
    return NextResponse.json(result);
  }
  
