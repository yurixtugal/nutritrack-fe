import { db } from "@/lib/db";

const seedMealType = async () => {
  await db.mealType.createMany({
    data: [
      {
        name: "Breakfast",
      },
      {
        name: "Morning Snack",
      },
      {
        name: "Lunch",
      },
      {
        name: "Afternoon Snack",
      },
      {
        name: "Dinner",
      },
    ],
  });

  return true;
};

export default seedMealType;
