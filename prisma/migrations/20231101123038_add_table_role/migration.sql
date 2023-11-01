-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'CLIENT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CLIENT';
