/* Replace with your SQL commands */
CREATE TABLE "products" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "img_path" VARCHAR(255),
    "available_quantity" INTEGER NOT NULL,
    "unit" VARCHAR(50) NOT NULL,
    "price" DECIMAL(10, 2) NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "farmer_id" INTEGER,
    FOREIGN KEY ("farmer_id") REFERENCES "users" ("id")
);
