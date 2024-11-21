const ProductOptionModel = require('../models/productOptionModel');

function middlewareCreateNewProductOption(req, res, next) {
    const { product_id, title, value } = req.body;
    try {
        if (!product_id || !title || !value) {
            return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar a opção de produto. Erro: ${error}`
        });
    }
}

async function middlewareUpdateProductOptionById(req, res, next) {
    const { title, value } = req.body;
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const productOption = await ProductOptionModel.findByPk(id);
    try {
        if (!title || !value) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar a opção de produto!'
            });
        }
        if (!productOption) {
            return res.status(404).send({
                message: `🔴 Opção de Produto com ID: ${id} não encontrada! 😰`
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao atualizar a opção de produto. Erro: ${error}`
        });
    }
}

async function middlewareDeleteProductOptionById(req, res, next) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const productOption = await ProductOptionModel.findByPk(id);
    try {
        if (!productOption) {
            return res.status(404).send({
                message: `🔴 Opção de Produto com ID: ${id} não encontrada! 😰`
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar a opção de produto. Erro: ${error}`
        });
    }
}

module.exports = {
    middlewareCreateNewProductOption,
    middlewareUpdateProductOptionById,
    middlewareDeleteProductOptionById
};