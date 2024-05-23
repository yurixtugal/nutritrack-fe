import { AddGeneralInformationMealForm } from "@/components/forms/add-meal-form";
import { db } from "@/lib/db";

const Addmeal = async () => {

  const mealType = await db.mealType.findMany();

  let propMealType = mealType.map((mealType) => {
    return {
      value: mealType.idMealType,
      label: mealType.name,
    };
  });

  return (
    <>
      <AddGeneralInformationMealForm lstMealType={propMealType} />
    </>
  );
};

export default Addmeal;
