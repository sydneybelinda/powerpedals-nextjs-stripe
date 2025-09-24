-- CreateTable
CREATE TABLE "public"."Bike" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);
