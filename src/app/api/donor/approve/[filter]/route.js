import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  const { filter } = params;
  const { db } = await connectToDatabase();

  try {
    const query = { blood: filter };
    console.log(query)
    const result = await db.collection("donors").find(query).toArray();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ message: err.toString() });
  }
};
