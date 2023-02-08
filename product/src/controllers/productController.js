import products from "../models/Product.js";

class ProductController {

    static listProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products)
        })
    }

    static registerProduct = (req, res) => {
        let product = new products(req.body);

        product.save((err) =>{

            if(err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastra produto`});
            } else {
                res.status(201).send(product.toJSON());
            }
        })
    }

    static listProductsById = (req, res) => {
        const {id} = req.params;
        products.findById(id, (err, products) => {
            if(err) {
                res.status(404).send({ message: `${err.message} - Produto não encontrado`});
            } else {
                res.status(200).json(products)
            }
        })
    }

    static updateProductById = (req, res) => {
        const {id} = req.params;
        products.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Produto atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteProductById = (req, res) => {
        const {id} = req.params;
        products.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "produto removido com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ProductController