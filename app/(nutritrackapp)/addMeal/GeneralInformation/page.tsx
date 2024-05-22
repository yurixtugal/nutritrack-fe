import { AddFoodForm } from "@/components/forms/add-food-form";
import { db } from "@/lib/db";

const AddFood = async () => {

  const mealType = await db.mealType.findMany();

  let propMealType = mealType.map((mealType) => {
    return {
      value: mealType.idMealType,
      label: mealType.name,
    };
  });

  return (
    <>
      <AddFoodForm lstMealType={propMealType} />
    </>
  );
};

export default AddFood;
