export interface MealProps {
  idMeal: string;
  name: string;
  description: string;
  pictureUrl: string;
  mealTypeId: string;
  dateMeal: Date;
  userId: string;
  mealType: MealTypeProps;
  mealIngredients: MealIngredientProps[];
}

export interface MealTypeProps {
  idMealType: string;
  name: string;
}

export interface MealIngredientProps {
  idMealIngredient: string;
  idMeal: string;
  idIngredient: string;
  quantity: number;
  idQuantityUnit: string;
  ingredient: Ingredient;
  quantityUnit: QuantityUnit;
}

export interface Ingredient {
  idIngredient: string;
  name: string;
  description: string;
}

export interface QuantityUnit {
  idQuantityUnit: string;
  name: string;
  quantity: number;
  shortName: string;
}