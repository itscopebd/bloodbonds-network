import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request) => {

    const useData = await request.json();
    const { db } = await connectToDatabase();
    try {

        const result = await db.collection('users').insertOne(useData);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}