import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        nome: { type: String, require: true},
        status: { type: String, require: true}

}
);

const categories = mongoose.model("categories", categorySchema);

export default categories;