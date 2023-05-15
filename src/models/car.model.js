import { model, Schema } from "mongoose";

const cartSchema = Schema({
    products: [{
        quantity: { type: Number, default: 1 },
        nombre: { type: String },
        thumbnail: { type: String },
        precio: { type: Number },
        category: { type: String }
    }],
    username: { type: String },
    email: { type: String },
    time: { type: String },
    address: { type: String }
});

export const Carts = model("cart", cartSchema);