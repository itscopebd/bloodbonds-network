import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const donorData = await request.json();
  const { db } = await connectToDatabase();
  const donorEmail = donorData.email;
  try {
    const checkDonorEmail = await db
      .collection("donors")
      .findOne({ email: donorEmail });
    if (checkDonorEmail) {
      return NextResponse.json({ message: "You Already applied !" });
    } else {
      const result = await db.collection("donors").insertOne(donorData);
      return NextResponse.json(result);
    }
  } catch (error) {
    return NextResponse.json({ message: error.toString() });
  }
};

export const GET = async () => {

  const { db } = await connectToDatabase();
  try {
      const result = await db.collection('donors').find().toArray();
      return NextResponse.json(result);

  } catch (err) {
      return NextResponse.json({ message: err.toString() });
  }
}
