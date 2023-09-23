import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
   
    const { db } = await connectToDatabase();

    try {
        
        const result = await db.collection('blogs').find({status: "active"}).toArray();
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}
