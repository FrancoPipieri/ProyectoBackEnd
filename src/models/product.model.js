import { model, Schema } from "mongoose";

const productSchema = Schema({
    nombre: { type: String },
    thumbnail: { type: String },
    precio: { type: Number },
    category: { type: String }
});

export const Product = model("products", productSchema);