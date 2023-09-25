import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const revalidate = 0;

export const GET = async () => {
    const { db } = await connectToDatabase();

    try {
        const result = await db.collection('blogs')
            .find({ status: "active" })
            .sort({ date: -1 })
            .toArray();

        return NextResponse.json(result);
    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}
