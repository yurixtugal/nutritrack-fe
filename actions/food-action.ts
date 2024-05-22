"use server"

import * as z from 'zod'
import { FoodSchema } from '@/schemas';
import { getCurrentProfile } from '@/lib/authLib';
import { db } from '@/lib/db';

export const registerFood = async (value: z.infer<typeof FoodSchema>) => {
  const validate = FoodSchema.safeParse(value);
  if (!validate.success) {
    return { error: "Invalid data. Please check the form.", data: null}
  }

  const { name, mealType, dateMeal, description } = value;

  const user = await getCurrentProfile();

  if (!user) {
    return { error: "User not found."}
  }

  const food = await db.meal.create({
    data: {
      name,
      mealTypeId: mealType,
      dateMeal,
      description : description ? description : "",
      userId: user.id,
      pictureUrl: ""
    }
  })
  return { success: "Food registered successfully.", data: food}
}