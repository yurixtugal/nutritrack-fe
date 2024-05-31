import { MealCard } from "@/components/cards/meal-card";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

const MealList = async () => {
  const user = await currentUser();

  const nutritrackUser = await db.user.findFirst({
    where: {
      authId: user?.id,
    },
  });

  let meals = await db.meal.findMany({
    where: {
      userId: nutritrackUser?.id,
    },
    include: {
      mealType: true,
      mealIngredients: {
        include: {
          ingredient: true,
          quantityUnit: true,
        },
      }
    },
  });

  const serializedMeals = meals.map(meal => ({
    ...meal,
    mealIngredients: meal.mealIngredients.map(ingredient => ({
      ...ingredient,
      quantity: Number(ingredient.quantity),
      quantityUnit: {
        ...ingredient.quantityUnit,
        quantity: Number(ingredient.quantityUnit.quantity),
      }
      // Convertir Decimal a number
    })),
  }));
  
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {serializedMeals.length === 0 && (
          <div className=" text-gray-500">
            No meals found, add a meal to get started
          </div>
        
        )}
        
        {serializedMeals.map((x) => (
          <MealCard key={x.idMeal} meal={x} />
        ))}
      </div>
    </main>
  );
};

export default MealList;
