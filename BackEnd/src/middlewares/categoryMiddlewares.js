const CategoryModel = require('../models/categoryModel');

function isValidName(name) {
    return typeof name === 'string' && name.trim().length > 0;
}

function middlewareCreateNewCategory(req, res, next) {
    const { name, slug } = req.body;
    try {
        if (!name || !slug) {
            return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }
        if (!isValidName(name)) {
            return res.status(400).send({
                message: '❌ O nome da categoria é inválido.'
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar a categoria. Erro: ${error}`
        });
    }
}

async function middlewareUpdateCategoryById(req, res, next) {
    const { name, slug } = req.body;
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const category = await CategoryModel.findByPk(id);
    try {
        if (!name && !slug) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar a categoria!'
            });
        }
        if (!category) {
            return res.status(404).send({
                message: `🔴 Categoria com ID: ${id} não encontrada! 😰`
            });
        }
        if (name && !isValidName(name)) {
            return res.status(400).send({
                message: '❌ O nome da categoria é inválido.'
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao atualizar a categoria. Erro: ${error}`
        });
    }
}

async function middlewareDeleteCategoryById(req, res, next) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
        return res.status(400).send({
            message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
        });
    }
    const category = await CategoryModel.findByPk(id);
    try {
        if (!category) {
            return res.status(404).send({
                message: `🔴 Categoria com ID: ${id} não encontrada! 😰`
            });
        }
        next();
    } catch (error) {
        return res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar a categoria. Erro: ${error}`
        });
    }
}

module.exports = {
    middlewareCreateNewCategory,
    middlewareUpdateCategoryById,
    middlewareDeleteCategoryById
};