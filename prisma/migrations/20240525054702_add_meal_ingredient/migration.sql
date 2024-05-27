-- CreateTable
CREATE TABLE "MealIngredient" (
    "idMealIngredient" TEXT NOT NULL,
    "idMeal" TEXT NOT NULL,
    "idIngredient" TEXT NOT NULL,
    "idQuantityUnit" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "MealIngredient_pkey" PRIMARY KEY ("idMealIngredient")
);

-- AddForeignKey
ALTER TABLE "MealIngredient" ADD CONSTRAINT "MealIngredient_idMeal_fkey" FOREIGN KEY ("idMeal") REFERENCES "Meal"("idMeal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealIngredient" ADD CONSTRAINT "MealIngredient_idIngredient_fkey" FOREIGN KEY ("idIngredient") REFERENCES "Ingredient"("idIngredient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealIngredient" ADD CONSTRAINT "MealIngredient_idQuantityUnit_fkey" FOREIGN KEY ("idQuantityUnit") REFERENCES "QuantityUnit"("idQuantityUnit") ON DELETE RESTRICT ON UPDATE CASCADE;
