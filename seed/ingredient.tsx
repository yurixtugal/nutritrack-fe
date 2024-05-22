import { db } from "@/lib/db";

const ingredient = [
  {
    name: "Pineapple",
    description: "Fruit rich in vitamin C",
    calories: [{
      calories: 80,
      idQuantityUnit: "1C",
      quantityIngredient: 1
    }]
  },
  {
    name: "Slim yogurt",
    description: "Low fat yogurt",
    calories: [{
      calories: 50,
      idQuantityUnit: "ML",
      quantityIngredient: 100
    }]
  },
  {
    name: "Rice",
    description: "White rice",
    calories: [{
      calories: 130,
      idQuantityUnit: "G",
      quantityIngredient: 100
    }]
  }
]


const seedIngredient = async () => {
  
  for (let i = 0; i < ingredient.length; i++) {
    const { name, description } = ingredient[i];
    const ingredientStored = await db.ingredient.create({
      data: {
        name,
        description
      }
    });

    for (let j = 0; j < ingredient[i].calories.length; j++) {
      const { calories, idQuantityUnit, quantityIngredient } = ingredient[i].calories[j];

      const shortName = idQuantityUnit;

      const quantityUnit = await db.quantityUnit.findFirst({
        where: {
          shortName
        }
      });

      if (!quantityUnit) {
        console.log(`Quantity unit ${shortName} not found`);
        continue;
      }

      await db.ingredientCalories.create({
        data: {
          calories,
          idQuantityUnit: quantityUnit.idQuantityUnit,
          quantityIngredient,
          idIngredient: ingredientStored.idIngredient
        }
      });
    }

  }

  return true;
};

export default seedIngredient;
