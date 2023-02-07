import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        produto: { type: String, require: true},
        decricao: { type: String, require: true},
        slug: { type: String, require: true},
        precoUnitario: { type: Number, require: true},
        estoque: { type: Number, require: true},
        categoria: { type: String, require: true}

}
);

const products = mongoose.model("products", productSchema);

export default products;