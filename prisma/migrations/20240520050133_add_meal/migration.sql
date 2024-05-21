-- CreateTable
CREATE TABLE "Meal" (
    "idMeal" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "mealTypeId" TEXT NOT NULL,
    "dateMeal" DATE NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("idMeal")
);

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_mealTypeId_fkey" FOREIGN KEY ("mealTypeId") REFERENCES "MealType"("idMealType") ON DELETE RESTRICT ON UPDATE CASCADE;
