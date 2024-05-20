import { getCurrentProfile } from "@/lib/authLib";
import { db } from "@/lib/db";
import seedQuantity from "@/seed/quantity";
import { NextResponse } from "next/server"

export const POST = (req: Request) => {
  return NextResponse.json({data: "hello"})
}

export const GET =  async (req: Request,
  { params }: { params: { idSeed: string }}
) => {
  const { searchParams } = new URL(req.url);
  const profile = await getCurrentProfile();
  if (!profile) {
    return new NextResponse("Unauthorized",{ status: 401})
  }
  const idSeed = params.idSeed;
  const seeder = await db.seeder.findFirst(
    {
      where: {
        id: idSeed
      }
    }
  )
  if (!seeder) return new NextResponse("Unauthorized",{ status: 401})
  const result = await seedQuantity();
  if (result) return NextResponse.json({data: "Quantity seeded"})
  else return NextResponse.json({data: "There was a probelm seeding quantity"})
}
