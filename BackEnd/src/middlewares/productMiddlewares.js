const ProductModel = require('../models/productModel');

function isValidPrice(price) {
    return !isNaN(price) && price > 0;
}

function middlewareCreateNewProduct(req, res, next) {
    const { name, slug, price, price_with_discount } = req.body;
    try {
        if (!name || !slug || !price || !price_with_discount) {
            return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }
        if (!isValidPrice(price) || !isValidPrice(price_with_discount)) {
            return res.status(400).send({
                message: '❌ O preço e o preço com desconto devem ser números positivos.'
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar o produto. Erro: ${error}`
        });
    }
}

async function middlewareUpdateProductById(req, res, next) {
    const { name, slug, price, price_with_discount } = req.body;
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const product = await ProductModel.findByPk(id);
    try {
        if (!name && !slug && !price && !price_with_discount) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar o produto!'
            });
        }
        if (!product) {
            return res.status(404).send({
                message: `🔴 Produto Não encontrado! 😰`
            });
        }
        if ((price && !isValidPrice(price)) || (price_with_discount && !isValidPrice(price_with_discount))) {
            return res.status(400).send({
                message: '❌ O preço e o preço com desconto devem ser números positivos.'
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao atualizar o produto. Erro: ${error}`
        });
    }
}

async function middlewareDeleteProductById(req, res, next) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const product = await ProductModel.findByPk(id);
    try {
        if (!product) {
            return res.status(404).send({
                message: `🔴 Produto com ID: ${id} não encontrado! 😰`
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar o produto. Erro: ${error}`
        });
    }
}

module.exports = {
    middlewareCreateNewProduct,
    middlewareUpdateProductById,
    middlewareDeleteProductById
};