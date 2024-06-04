import { MealCard } from "@/components/cards/meal-card";
import { db } from "@/lib/db";
import { MealIngredientCalculationProps, MealProps } from "@/props";
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
          ingredient: {
            include: {
              ingredientCalories: {
                include: {
                  quantityUnit: true,
                },
              },
            },
          },
          quantityUnit: true,
        },
      }
    },
  });

  const calculateCalories = (meal: MealIngredientCalculationProps[]) => {
    let totalCalories = 0;
    meal.forEach((ingredient) => {
      ingredient.ingredient.ingredientCalories.forEach((calorie) => {
        totalCalories += calorie.calories * (ingredient.quantity / calorie.quantityIngredient);
      });
    });
    return totalCalories;
  }

  const serializedMeals = meals.map(meal => ({
    ...meal,
    totalCalories: calculateCalories(meal.mealIngredients.map(ingredient => ({
      ...ingredient,
      ingredient: {
        ...ingredient.ingredient,
        ingredientCalories: ingredient.ingredient.ingredientCalories.map(calorie => ({
          ...calorie,
          quantityUnit: {
            ...calorie.quantityUnit,
            quantity: Number(calorie.quantityUnit.quantity),
          },
          calories: Number(calorie.calories),
          quantityIngredient: Number(calorie.quantityIngredient),
        })),
      },
      quantityUnit: {
        ...ingredient.quantityUnit,
        quantity: Number(ingredient.quantityUnit.quantity),
      },
      quantity: Number(ingredient.quantity),
    }))
    ),
    mealIngredients: meal.mealIngredients.map(ingredient => ({
      ...ingredient,
      ingredient: {
        idIngredient: ingredient.ingredient.idIngredient,
        name: ingredient.ingredient.name,
        description: ingredient.ingredient.description},
      quantity: Number(ingredient.quantity),
      quantityUnit: {
        ...ingredient.quantityUnit,
        quantity: Number(ingredient.quantityUnit.quantity),
      }
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
