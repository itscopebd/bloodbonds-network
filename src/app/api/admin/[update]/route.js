// user update 

import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PUT= async (request, { params })=> {
    const { update } = params;
    console.log(update)
    const data = await request.json();
    console.log(data)
    const query = { _id: new ObjectId(update) };
    const { db } = await connectToDatabase();
    const result = await db.collection("users").updateOne(query, {
      $set: {
        role:data
      },
    });
    return NextResponse.json(result, { message: "Updated" });
  }
  
  
  // delete user
  export const DELETE = async (request, { params }) => {
    const { id } = params;

    const query = { _id: new ObjectId(id) };
  
    const { db } = await connectToDatabase();
    const result = await db.collection("users").deleteOne(query);
    return NextResponse.json(result, { message: "Deleted!" });
  };
  