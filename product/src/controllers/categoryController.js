import categories from "../models/Category.js";

class CategoryController {

    static listCategories = (req, res) => {
        categories.find((err, categories) => {
            if(err){
                res.status(500).send({message: err.message})
            } else{
                res.status(200).json(categories)
            } 
        })
    }

    static registerCategory = (req, res) => {
        let category = new categories(req.body);

        category.save((err) =>{

            if(err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastra categoria`});
            } else {
                res.status(201).send(category.toJSON());
            }
        })
    }

    static listCategoriesById = (req, res) => {
        const {id} = req.params;
        categories.findById(id, (err, categories) => {
            if(err) {
                res.status(404).send({ message: `${err.message} - Categoria não encontrada`});
            } else {
                res.status(200).json(categories)
            }
        })
    }

    static updateCategoryById = (req, res) => {
        const {id} = req.params;
        categories.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Categoria atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static deleteCategoryById = (req, res) => {
        const {id} = req.params;
        categories.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Categorias removido com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default CategoryController