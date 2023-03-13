import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        nome: { type: String, require: true, match: /^[^\d.,][^.,]{3,}/ },
        status: { type: String, require: true },
    },
);

const Categories = mongoose.model('Categories', categorySchema);

export default Categories;
