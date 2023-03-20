import Products from '../models/Product.js';

class ProductController {
    static listProducts = (req, res) => {
        Products.find((err, product) => res.status(200).json(product));
    };

    static registerProduct = (req, res) => {
        const product = new Products(req.body);
        product.save((err) => {
            if (err) {
                return res.status(500).send({ message: `${err.message} - falha ao cadastra produto` });
            }
            return res.status(201).send(product.toJSON());
        });
    };

    static listProductsById = (req, res) => {
        const { id } = req.params;
        Products.findById(id, (err, product) => {
            if (err) {
                return res.status(404).send({ message: `${err.message} - Produto não encontrado` });
            }
            return res.status(200).json(product);
        });
    };

    static updateProductById = (req, res) => {
        const { id } = req.params;
        Products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                return res.status(200).send({ message: 'Produto atualizado com sucesso' });
            }
            return res.status(500).send({ message: err.message });
        });
    };

    static deleteProductById = (req, res) => {
        const { id } = req.params;
        Products.findByIdAndDelete(id, (err) => {
            if (!err) {
                return res.status(200).send({ message: 'produto removido com sucesso' });
            }
            return res.status(500).send({ message: err.message });
        });
    };
}

export default ProductController;
