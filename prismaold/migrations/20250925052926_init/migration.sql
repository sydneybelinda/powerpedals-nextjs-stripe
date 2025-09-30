/*
  Warnings:

  - Made the column `sku` on table `Bike` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Bike" ALTER COLUMN "sku" SET NOT NULL;
