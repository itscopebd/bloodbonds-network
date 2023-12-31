import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  const { checkuser } = params;
  const { db } = await connectToDatabase();

  try {
    const query = { email: checkuser };
    const result = await db.collection("users").find(query).toArray();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ message: err.toString() });
  }
};

// user update 

export const PUT= async (request, { params })=> {
  const { checkuser } = params;
  const data = await request.json();
  const query = { _id: new ObjectId(checkuser) };
  const { db } = await connectToDatabase();
  const result = await db.collection("users").updateOne(query, {
    $set: {
      role:data
    },
  });
  return NextResponse.json(result, { message: "Updated" });
}
export const PATCH= async (request, { params })=> {
  const { checkuser } = params;
  const data = await request.json();
  const query = { email: checkuser };
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
  const { checkuser } = params;
  console.log(checkuser);
  const query = { _id: new ObjectId(checkuser) };

  const { db } = await connectToDatabase();
  const result = await db.collection("users").deleteOne(query);
  return NextResponse.json(result, { message: "Deleted!" });
};
