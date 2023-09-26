import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    const { id } = params;
    const { db } = await connectToDatabase();

    try {
        const query = { _id : new ObjectId(id)};
        const result = await db.collection('helps').findOne(query);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}