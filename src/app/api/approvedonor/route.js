import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  console.log(" approve ", request)
  const query = { status: "Approve" };
  const { db } = await connectToDatabase();
  const result = await db.collection("donors").find(query).toArray();
  return NextResponse.json(result);
};
