import Categories from '../models/Category.js';

class CategoryController {
    static listCategories = (req, res) => {
        Categories.find((err, category) => {
            if (err) {
                return res.status(500).send({ message: err.message });
            }
            return res.status(200).json(category);
        });
    };

    static registerCategory = (req, res) => {
        const category = new Categories(req.body);

        category.save((err) => {
            if (err) {
                return res.status(500).send({ message: `${err.message} - falha ao cadastra categoria` });
            }
            return res.status(201).send(category.toJSON());
        });
    };

    static listCategoriesById = (req, res) => {
        const { id } = req.params;
        Categories.findById(id, (err, category) => {
            if (err) {
                return res.status(404).send({ message: `${err.message} - Categoria não encontrada` });
            }
            return res.status(200).json(category);
        });
    };

    static updateCategoryById = (req, res) => {
        const { id } = req.params;
        Categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Categoria atualizado com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static deleteCategoryById = (req, res) => {
        const { id } = req.params;
        Categories.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Categorias removido com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };
}

export default CategoryController;
