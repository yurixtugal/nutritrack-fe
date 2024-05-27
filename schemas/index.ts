import * as z from "zod";

export const MealIngredientsSchema = z.object({
  ingredient: z.string().min(1, {
    message: "Please enter an ingredient name.",
  }),
  quantityUnit: z.string().min(1, {
    message: "Please enter a quantity.",
  }),
  quantity: z.coerce.number().min(0.1, {
    message: "Please enter a quantity greater than 0.",
  })
});

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