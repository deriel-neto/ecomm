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
}


export default ProductController