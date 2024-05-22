import * as z from "zod";

export const FoodSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter a food name.",
  }),
  mealType: z
    .string({
      required_error: "Please select a meal type.",
    })
    .min(1, {
      message: "Please select a meal type.",
    }),
  dateMeal: z.date({
    required_error: "Please select a date.",
  }),
  description: z.string().optional(),
});