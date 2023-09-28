import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const GET = async (request, { params }) => {
  const { filter } = params;

  const { db } = await connectToDatabase();

  try {
    const query = { blood: filter };
   
    const result = await db.collection("donors").find(query).toArray();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ message: err.toString() });
  }
};
