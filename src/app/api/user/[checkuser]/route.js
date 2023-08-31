import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
export const GET = async (request,{params}) => {
    const { checkuser } = params;
    const { db } = await connectToDatabase();

    try {
        const query = { email: checkuser };
        const result = await db.collection('users').find(query).toArray();
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}