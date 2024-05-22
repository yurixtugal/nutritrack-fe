-- CreateTable
CREATE TABLE "IngredientCalories" (
    "idIngredientCalories" TEXT NOT NULL,
    "idIngredient" TEXT NOT NULL,
    "calories" DECIMAL(65,30) NOT NULL,
    "idQuantityUnit" TEXT NOT NULL,
    "quantityIngredient" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "IngredientCalories_pkey" PRIMARY KEY ("idIngredientCalories")
);

-- AddForeignKey
ALTER TABLE "IngredientCalories" ADD CONSTRAINT "IngredientCalories_idIngredient_fkey" FOREIGN KEY ("idIngredient") REFERENCES "Ingredient"("idIngredient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientCalories" ADD CONSTRAINT "IngredientCalories_idQuantityUnit_fkey" FOREIGN KEY ("idQuantityUnit") REFERENCES "QuantityUnit"("idQuantityUnit") ON DELETE RESTRICT ON UPDATE CASCADE;
