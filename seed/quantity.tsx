import { db } from "@/lib/db";

const seedQuantity = async () => {
  await db.quantityUnit.createMany({
    data: [
      {
        name: "1 cup",
        quantity: 1,
        shortName: "1C",
      },
      {
        name: "1/2 cup",
        quantity: 0.5,
        shortName: "0.5C",
      },
      {
        name: "1/3 cup",
        quantity: 0.33,
        shortName: "0.33C",
      },
      {
        name: "gram",
        quantity: 1,
        shortName: "G",
      },
      {
        name: "milliliter",
        quantity: 1,
        shortName: "ML",
      },
    ],
  });

  return true;
};

export default seedQuantity;
