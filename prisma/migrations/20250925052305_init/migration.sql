/*
  Warnings:

  - Made the column `description` on table `Bike` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Bike` required. This step will fail if there are existing NULL values in that column.
  - Made the column `currency` on table `Bike` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Bike` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Bike" ADD COLUMN     "sku" TEXT,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "currency" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL;
