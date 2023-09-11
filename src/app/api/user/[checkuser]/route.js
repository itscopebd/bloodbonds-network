import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
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


export async function PATCH (request, {params}) {
    const {checkuser}= params;
   let  {
 newrole: role

   }= await request.json()
   const { db } = await connectToDatabase();
   const result = await db.collection('users').updateOne(
    { email: checkuser },
   {$set:{
    role
   }}
  );
    return NextResponse.json(result,{message:"Updated"})
}