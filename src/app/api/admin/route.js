import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET =async ()=>{
    const { db } = await connectToDatabase();
    
    try {
    
        const result= await db.collection('users').find({role:"admin"}).toArray();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: err.toString() });
    }
    }
    