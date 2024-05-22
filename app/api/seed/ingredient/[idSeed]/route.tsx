import { db } from "@/lib/db";
import seedIngredient from "@/seed/ingredient";
import { NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: { idSeed: string } }
) => {
  const idSeed = params.idSeed;
  const seeder = await db.seeder.findFirst({
    where: {
      id: idSeed,
    },
  });
  if (!seeder) return new NextResponse("Unauthorized", { status: 401 });
  const result = await seedIngredient();
  if (result) {
    await db.seeder.update({
      where: {
        id: idSeed,
      },
      data: {
        isDone: true,
      },
    });
    return NextResponse.json({ data: "Ingredient seeded" });
  } else
    return NextResponse.json({ data: "There was a problem seeding Ingredient" });
};
