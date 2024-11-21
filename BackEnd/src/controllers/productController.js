const ProductModel = require('../models/productModel');

const createNewProduct = async (req, res) => {
    const { name, slug, price, price_with_discount, description, stock, enabled, use_in_menu } = req.body;

    try {
        const newProduct = await ProductModel.create({
            name,
            slug,
            price,
            price_with_discount,
            description,
            stock,
            enabled,
            use_in_menu
        });

        return res.status(201).send({
            message: `🟢 Produto ${newProduct.name}, ID: ${newProduct.id} criado com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao criar o produto. Erro: ${error.message}`
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        return res.send(products);
    } catch (error) {
        return res.status(500).send({
            message: `❌ Erro ao listar os produtos! Erro: ${error.message}`
        });
    }
};

const updateProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, slug, price, price_with_discount, description, stock, enabled, use_in_menu } = req.body;

    try {
        const product = await ProductModel.findByPk(id);
        if (!product) {
            return res.status(404).send({
                message: `❌ Produto ID: ${id} não encontrado.`
            });
        }

        await ProductModel.update(
            {
                name,
                slug,
                price,
                price_with_discount,
                description,
                stock,
                enabled,
                use_in_menu
            },
            { where: { id: id } }
        );
        return res.status(200).send({
            message: `🟢 Produto ID: ${id} atualizado com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao atualizar o produto. Erro: ${error.message}`
        });
    }
};

const deleteProductById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const product = await ProductModel.findByPk(id);
        if (!product) {
            return res.status(404).send({
                message: `❌ Produto ID: ${id} não encontrado.`
            });
        }

        await ProductModel.destroy({ where: { id: id } });
        return res.status(200).send({
            message: `🟢 Produto ID: ${id} deletado com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar o produto. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewProduct,
    getAllProducts,
    updateProductById,
    deleteProductById
};