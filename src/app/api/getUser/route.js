import { getServerSession } from "next-auth";
import User from "../../../../model/users"
import { authOptions } from "../../../../lib/authOptions";
import dbConnect from "../../../../lib/mongo";
import { NextResponse } from "next/server";
export async function GET() {
  await dbConnect();
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  };
   const user = await User.findOne({email: session.user.email});
   if(user){
       return NextResponse.json({ user }, { status: 200 });
   }
   await User.create({
       name: session.user.name,
       email: session.user.email,
       image: session.user.image,
       createdAt: new Date(),
       updatedAt: new Date(),
   });
 return NextResponse.json({ user: session }, { status: 200 });
}
