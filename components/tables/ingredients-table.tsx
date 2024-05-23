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

}

const IngredientsTable = ({ ingredients }: IngredientsTableProps) => {
  const showLayout = () => {
    console.log("Show layout");
  };
  return (
    <><div className="grid space-y-10 justify-normal">
      <SheetIngredient />
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
          <TableRow>
            <TableCell>Pinapple</TableCell>
            <TableCell>1 cup</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right"> 100 </TableCell>
          </TableRow>
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
