import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
 
  const { db } = await connectToDatabase();
  try {
    const result = await db.collection("donors").find({status:"Approve"}).toArray();
    return NextResponse.json(result);
 
  } catch (error) {
    return NextResponse.json({ message: err.toString() });
  }
 
};
