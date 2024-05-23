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

  return (
    <>
      <div className="grid space-y-10">
        <h1 className="lg:text-2xl text-xl text-center ">
          {formatDate(meal.dateMeal)} - {meal.mealType.name} - {meal.name}
        </h1>
        <IngredientsTable ingredients={ingredients} />
      </div>
    </>
  );
};

export default Addingredients;
