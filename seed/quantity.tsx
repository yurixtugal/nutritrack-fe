import { db } from "@/lib/db";

const seedQuantity = async () => {
  await db.quantityUnit.createMany({
    data: [
      {
        name: "1 cup",
        quantity: 1,
      },
      {
        name: "1/2 cup",
        quantity: 0.5,
      },
      {
        name: "1/3 cup",
        quantity: 0.33,
      },
      {
        name: "gram",
        quantity: 1,
      },
      {
        name: "milliliter",
        quantity: 1,
      },
    ],
  });

  return true;
};

export default seedQuantity;
