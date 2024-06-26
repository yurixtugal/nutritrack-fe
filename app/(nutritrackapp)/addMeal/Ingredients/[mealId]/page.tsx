import { IngredientsTable } from "@/components/tables/ingredients-table";
import { db } from "@/lib/db";

interface IngredientsPageProps {
  params: {
    mealId: string;
  };
}

const Addingredients = async ({ params }: IngredientsPageProps) => {
  const ingredients = await db.ingredient.findMany({
    include: {
      ingredientCalories: {
        include: {
          quantityUnit: true,
        },
      },
    },
  });

  const meal = await db.meal.findFirst({
    where: {
      idMeal: params.mealId,
    },
    include: {
      mealType: true,
      mealIngredients: {
        include: {
          ingredient: true,
          quantityUnit: true,
        },
      },
    },
  });

  if (!meal) return <div>Meal not found</div>;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  const ingredientsTable = meal.mealIngredients
    ? meal.mealIngredients.map((mi) => {
      const ingredient = ingredients.find((i) => i.idIngredient === mi.ingredient.idIngredient);

      if (!ingredient) return {
        idIngredientTable: mi.idMealIngredient,
        ingredient: mi.ingredient.name,
        quantity: mi.quantity.toNumber(),
        quantityUnit: mi.quantityUnit.name,
        totalCalories: 0,      
      };

      const quantityUnitId = mi.quantityUnit.idQuantityUnit;

      const ingredientCalories = ingredient.ingredientCalories.find(
        (ic) => ic.idQuantityUnit === quantityUnitId
      );

      if (!ingredientCalories) return {
        idIngredientTable: mi.idMealIngredient,
        ingredient: mi.ingredient.name,
        quantity: mi.quantity.toNumber(),
        quantityUnit: mi.quantityUnit.name,
        totalCalories: 0,      
      };

      const totalCalories = ingredientCalories.calories.toNumber() * (mi.quantity.toNumber()/ingredientCalories.quantityIngredient.toNumber());
      
      
        return {
          idIngredientTable: mi.idMealIngredient,
          ingredient: mi.ingredient.name,
          quantity: mi.quantity.toNumber(),
          quantityUnit: mi.quantityUnit.name,
          totalCalories: totalCalories,
        };
      })
    : [];

    console.log(ingredientsTable)
  return (
    <>
      <div className="grid space-y-10">
        <h1 className="lg:text-2xl text-xl text-center ">
          {formatDate(meal.dateMeal)} - {meal.mealType.name} - {meal.name}
        </h1>
        <IngredientsTable
          ingredients={ingredients}
          mealId={params.mealId}
          ingredientsTable={ingredientsTable}
        />
      </div>
    </>
  );
};

export default Addingredients;
