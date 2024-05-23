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
import { Form } from "../ui/form";

const SheetIngredient = () => {

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
        
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { SheetIngredient };
