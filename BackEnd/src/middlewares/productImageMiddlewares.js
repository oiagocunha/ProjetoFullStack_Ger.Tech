const ProductImageModel = require('../models/productImageModel');

function middlewareCreateNewProductImage(req, res, next) {
    const { product_id, path } = req.body;
    try {
        if (!product_id || !path) {
            return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar a imagem de produto. Erro: ${error}`
        });
    }
}

async function middlewareUpdateProductImageById(req, res, next) {
    const { path } = req.body;
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const productImage = await ProductImageModel.findByPk(id);
    try {
        if (!path) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar a imagem de produto!'
            });
        }
        if (!productImage) {
            return res.status(404).send({
                message: `🔴 Imagem de Produto com ID: ${id} não encontrada! 😰`
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao atualizar a imagem de produto. Erro: ${error}`
        });
    }
}

async function middlewareDeleteProductImageById(req, res, next) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const productImage = await ProductImageModel.findByPk(id);
    try {
        if (!productImage) {
            return res.status(404).send({
                message: `🔴 Imagem de Produto com ID: ${id} não encontrada! 😰`
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar a imagem de produto. Erro: ${error}`
        });
    }
}

module.exports = {
    middlewareCreateNewProductImage,
    middlewareUpdateProductImageById,
    middlewareDeleteProductImageById
};