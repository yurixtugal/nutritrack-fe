/*
  Warnings:

  - Added the required column `userNameNutritrack` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "showPublicDiet" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userNameNutritrack" TEXT NOT NULL;
