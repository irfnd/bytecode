CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "email" text UNIQUE NOT NULL,
  "noTelp" text UNIQUE NOT NULL,
  "password" text NOT NULL
);

CREATE TABLE "companies" (
  "id" serial PRIMARY KEY,
  "email" text UNIQUE NOT NULL,
  "noTelp" text UNIQUE NOT NULL,
  "password" text NOT NULL
);

CREATE TYPE "type" AS ENUM (
  'refresh',
  'resetPassword'
);

CREATE TABLE "tokens" (
  "id" serial PRIMARY KEY,
  "idUser" int DEFAULT null,
  "idCompany" int DEFAULT null,
  "type" type,
  "token" text UNIQUE NOT NULL
);

ALTER TABLE "tokens" ADD FOREIGN KEY ("idUser") REFERENCES "users" ("id");
ALTER TABLE "tokens" ADD FOREIGN KEY ("idCompany") REFERENCES "companies" ("id");
