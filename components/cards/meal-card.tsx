import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { MealProps } from "@/props";
import { formatDate } from "@/lib/utils";

interface MealCardProps {
  meal: MealProps;
}

const MealCard = ({ meal }: MealCardProps) => {
  
  return (
    <div className="border border-green-500 rounded-lg">
      <Card>
        <CardHeader className="flex items-center justify-between pb-2">
          <div className="text-sm font-medium">{formatDate(meal.dateMeal)}</div>
          <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
            {meal.mealType.name}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-bold">{meal.name}</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            {meal.mealIngredients.map((x) => (
            <li key={x.idMealIngredient} className="flex items-center justify-between">
              <span>{x.ingredient.name}</span>
              <span>{x.quantity} ({x.quantityUnit.name})</span>
            </li>
            ))}
          </ul>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium">Calories: {meal.totalCalories} kcal</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { MealCard };
