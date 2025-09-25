/*
  Warnings:

  - Made the column `stock` on table `Bike` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `Bike` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Bike" ALTER COLUMN "stock" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL;
