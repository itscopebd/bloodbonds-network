import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
   
    const { db } = await connectToDatabase();

    try {
        const query = { status: "active"};
        const result = await db.collection('blogs').find(query).toArray();
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}
