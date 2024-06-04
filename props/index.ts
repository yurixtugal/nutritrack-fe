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
  totalCalories: number;
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

export interface IngredientCalories {
  idIngredientCalories: string;
  idIngredient: string;
  calories: number;
  idQuantityUnit: string;
  quantityIngredient: number;
  quantityUnit: QuantityUnit;
}

export interface MealIngredientCalculationProps {
  idMealIngredient: string,
  idMeal: string,
  idIngredient: string,
  idQuantityUnit: string,
  quantity: number,
  ingredient: {
    idIngredient:  string,
    name:  string,
    description:  string,
    ingredientCalories: any[]
  },
  quantityUnit: {
    idQuantityUnit:  string,
    name:  string,
    quantity: number,
    shortName: string
  }
}