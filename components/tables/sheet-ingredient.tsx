"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { MealIngredientsSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";


import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface QuantityUnitStructure {
  idQuantityUnit: string;
  name: string;
  quantity: number | any;
  shortName: string;
}
interface IngredientStructure {
  idIngredient: string;
  name: string;
  description: string;
  ingredientCalories: {
    idIngredientCalories: string;
    idIngredient: string;
    calories: number | any;
    idQuantityUnit: string;
    quantityIngredient: number | any;
    quantityUnit: QuantityUnitStructure;
  }[];
}

interface IngredientsSheetProps {
  ingredients: IngredientStructure[];

}

const SheetIngredient = ({ ingredients }: IngredientsSheetProps) => {
  
  const form = useForm<z.infer<typeof MealIngredientsSchema>>({
    resolver: zodResolver(MealIngredientsSchema),
    defaultValues: {
      ingredient: "",
      quantity: 0,
      quantityUnit: ""
    },
  });

  const [arrQuantityUnit, setArrQuantityUnit] = useState<QuantityUnitStructure[]>([]);

  const updateQuantityUnit = (idIngredient: string) => {
    const ingredient = ingredients.find((ingredient) => ingredient.idIngredient === idIngredient);
    console.log(ingredient)
    if (ingredient) {
      setArrQuantityUnit(ingredient.ingredientCalories.map((ingredientCalories) => ingredientCalories.quantityUnit));
    }
  }


  const onSubmit = async (data: z.infer<typeof MealIngredientsSchema>) => {
    console.log("Hello world")
  };
  return (
      <Sheet>
      <SheetTrigger asChild>
        <div><Button  className="w-1/6 hidden lg:block">Add ingredient</Button>
        <Button  className="w-1/3 lg:hidden">Add ingredient</Button></div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add an Ingredient</SheetTitle>
          <SheetDescription>
            Should add the ingredient to the meal
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-3/4 space-y-3 pt-3"
              >
                              <FormField
                  control={form.control}
                  name="ingredient"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Ingredient</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? ingredients.find(
                                    (ingredient) => ingredient.idIngredient === field.value
                                  )?.name
                                : "Select ingredient"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search meal type..." />
                            <CommandEmpty>No ingredient type found.</CommandEmpty>
                            <CommandGroup>
                              {ingredients.map((ingredient) => (
                                <CommandItem
                                  value={ingredient.name}
                                  key={ingredient.idIngredient}
                                  onSelect={() => {
                                    form.setValue("ingredient", ingredient.idIngredient);
                                    updateQuantityUnit(ingredient.idIngredient)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      ingredient.idIngredient === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {ingredient.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                          <FormField
                  control={form.control}
                  name="quantityUnit"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Quantity unit</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? arrQuantityUnit.find(
                                    (quantityUnit) => quantityUnit.idQuantityUnit === field.value
                                  )?.name
                                : "Select quantity unit"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search meal type..." />
                            <CommandEmpty>No quantity unit type found.</CommandEmpty>
                            <CommandGroup>
                              {arrQuantityUnit.map((quantity) => (
                                <CommandItem
                                  value={quantity.name}
                                  key={quantity.idQuantityUnit}
                                  onSelect={() => {
                                    form.setValue("quantityUnit", quantity.idQuantityUnit);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      quantity.idQuantityUnit === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {quantity.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="Quantity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SheetClose asChild>
                <Button type="submit" className="w-[100px]">
                  Add
                </Button>
                </SheetClose>
              </form>
            </Form>
      </SheetContent>
  
    </Sheet>
  );
};

export { SheetIngredient };
