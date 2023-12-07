/* Replace with your SQL commands */
CREATE TABLE "cart" (
    "id" SERIAL PRIMARY KEY,
    "product_id" INTEGER REFERENCES "products" ("id"),
    "buyer_id" INTEGER REFERENCES "users" ("id"),
    "selected_quantity" INTEGER NOT NULL,
    "total_price" DECIMAL(10, 2) NOT NULL,
    "status" VARCHAR(50) DEFAULT 'pending' CHECK ("status" IN ('pending', 'completed', 'canceled')),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
