-- CreateTable
CREATE TABLE "MealType" (
    "idMealType" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MealType_pkey" PRIMARY KEY ("idMealType")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "idIngredient" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("idIngredient")
);

-- CreateTable
CREATE TABLE "QuantityUnit" (
    "idQuantityUnit" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "QuantityUnit_pkey" PRIMARY KEY ("idQuantityUnit")
);
