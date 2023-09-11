import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {

    const blogData = await request.json();
    const { db } = await connectToDatabase();
    try {

        const result = await db.collection('blogs').insertOne(blogData);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}
export const GET = async () => {

    const { db } = await connectToDatabase();
    try {
        const result = await db.collection('blogs').find().toArray();
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}

export const DELETE = async (request)=>{
    const id =  request.nextUrl.searchParams.get('id')
    const { db } = await connectToDatabase();
    const res= await db.collection('blogs').deleteOne({_id: new ObjectId(id)})
    return NextResponse.json(res)
}