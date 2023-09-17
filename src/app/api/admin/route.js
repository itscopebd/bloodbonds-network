import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { db } = await connectToDatabase();

  try {
    const result = await db
      .collection("users")
      .find({ role: "admin" })
      .toArray();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: err.toString() });
  }
};
// delete admin 
export const DELETE = async (request) => {
  const id = request.nextUrl.searchParams.get("id");
  console.log(id);
  const { db } = await connectToDatabase();
  const res = await db.collection("users").deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json(res);
};

// make user from admin 

// export const PUT = async (request) => {
//   const id = request.nextUrl.searchParams.get("id");

//   const body= await request.json();
//   console.log(body);
//   const { db } = await connectToDatabase();
//   const res = await db.collection("users").updateOne({ _id: new ObjectId(id) });
//   return NextResponse.json(res);
// };
