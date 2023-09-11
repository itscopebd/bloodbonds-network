import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    const { id } = params;
    const { db } = await connectToDatabase();

    try {
        const query = { _id : new ObjectId(id)};
        const result = await db.collection('blogs').findOne(query);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}


export async function PUT(request, {params}) {
    const {id}= params;
   let  {
  Newtitle:title,
   Newcontent:content,
   Newauthor: author,
   Newdate: date,
   Newimg : img,
Newstatus : status,
Newemail: email

   }= await request.json()
   const { db } = await connectToDatabase();
   const result = await db.collection('blogs').updateOne(
    { _id: new ObjectId(id) },
   {$set:{
    title,content,author,date,img,status,email
   }}
  );
    return NextResponse.json(result,{message:"Updated"})
}