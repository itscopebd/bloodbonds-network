import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const GET = async () => {
  const query = { status: "Pending" };
 
  try {
    const { db } = await connectToDatabase();
  const result = await db.collection("donors").find(query).toArray();
  return NextResponse.json(result);
  } catch (error) {
    console.log(error)
  }
};