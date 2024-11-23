const CategoryModel = require('../models/categoryModel');

const createNewCategory = async (req, res) => {
    const { name, slug, use_in_menu } = req.body;

    try {
        const newCategory = await CategoryModel.create({
            name,
            slug,
            use_in_menu
        });

        return res.status(201).send({
            message: `🟢 Categoria ${newCategory.name}, ID: ${newCategory.id} criada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao criar a categoria. Erro: ${error.message}`
        });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.findAll();
        return res.send(categories);
    } catch (error) {
        return res.status(500).send({
            message: `❌ Erro ao listar as categorias! Erro: ${error.message}`
        });
    }
};

const updateCategoryById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, slug, use_in_menu } = req.body;

    try {
        const category = await CategoryModel.findByPk(id);
        if (!category) {
            return res.status(404).send({
                message: `❌ Categoria ID: ${id} não encontrada.`
            });
        }

        await CategoryModel.update(
            {
                name,
                slug,
                use_in_menu
            },
            { where: { id: id } }
        );
        return res.status(200).send({
            message: `🟢 Categoria ID: ${id} atualizada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao atualizar a categoria. Erro: ${error.message}`
        });
    }
};

const deleteCategoryById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const category = await CategoryModel.findByPk(id);
        if (!category) {
            return res.status(404).send({
                message: `❌ Categoria ID: ${id} não encontrada.`
            });
        }

        await CategoryModel.destroy({ where: { id: id } });
        return res.status(200).send({
            message: `🟢 Categoria ID: ${id} deletada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar a categoria. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewCategory,
    getAllCategories,
    updateCategoryById,
    deleteCategoryById
};