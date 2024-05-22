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
          quantityUnit: true
        }
      }
    }
  });

  
  return <IngredientsTable ingredients={ingredients} />;
}
 
export default Addingredients;