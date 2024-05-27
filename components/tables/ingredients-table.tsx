"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { SheetIngredient } from "./sheet-ingredient";
import { DialogIngredient } from "./dialog-ingredient";

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
    quantityUnit: {
      idQuantityUnit: string;
      name: string;
      quantity: number | any;
      shortName: string;
    };
  }[];
}



interface IngredientsTableProps {
  ingredients: IngredientStructure[];
  mealId: string;
  
  ingredientsTable: {
    idIngredientTable: string,
    ingredient: string,
    quantity: number,
    quantityUnit: string
  }[]
}

const IngredientsTable = ({ ingredients, mealId, ingredientsTable }: IngredientsTableProps) => {
  console.log(ingredientsTable)
  return (
    <><div className="grid space-y-10 justify-normal">
      <DialogIngredient ingredients={ingredients} mealId={mealId} />
      <Table>
        <TableCaption>A list of your ingridients</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Ingredient</TableHead>
            <TableHead>Quantity Unit</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Calories</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        { ingredientsTable.map ((it) => 
        <TableRow key={it.idIngredientTable}>
        <TableCell>{it.ingredient}</TableCell>
        <TableCell>{it.quantityUnit}</TableCell>
        <TableCell>{it.quantity}</TableCell>
        <TableCell className="text-right"> 100 </TableCell>
      </TableRow>
        )}
          
        </TableBody>
        <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Calories</TableCell>
          <TableCell className="text-right"> 100 </TableCell>
        </TableRow>
      </TableFooter>
      </Table></div>
    </>
  );
};

export { IngredientsTable };
