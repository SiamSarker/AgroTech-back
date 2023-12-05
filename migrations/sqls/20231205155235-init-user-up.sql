/* Replace with your SQL commands */
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(320),
    "phone" VARCHAR(20) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) DEFAULT 'buyer' CHECK ("role" IN ('farmer', 'buyer'))
);
