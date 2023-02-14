import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        produto: { type: String, require: true, match: /^[^\d.,][^.,]{3,}/},
        decricao: { type: String, require: true},
        slug: { type: String, require: true, match: /^[a-zA-Z\d-]+$/},
        precoUnitario: { type: Number, require: true, min: 1},
        estoque: { type: Number, require: true, min: 1, max: 10000},
        idCategoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true},

}
);

const products = mongoose.model("products", productSchema);

export default products;