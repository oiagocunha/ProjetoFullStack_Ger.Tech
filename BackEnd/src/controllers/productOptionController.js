const ProductOptionModel = require('../models/productOptionModel');

const createNewProductOption = async (req, res) => {
    const { product_id, title, value } = req.body;

    try {
        const newProductOption = await ProductOptionModel.create({
            product_id,
            title,
            value
        });

        return res.status(201).send({
            message: `🟢 Opção de Produto ${newProductOption.title}, ID: ${newProductOption.id} criada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao criar a opção de produto. Erro: ${error.message}`
        });
    }
};

const getAllProductOptions = async (req, res) => {
    try {
        const productOptions = await ProductOptionModel.findAll();
        return res.send(productOptions);
    } catch (error) {
        return res.status(500).send({
            message: `❌ Erro ao listar as opções de produto! Erro: ${error.message}`
        });
    }
};

const updateProductOptionById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { title, value } = req.body;

    try {
        const productOption = await ProductOptionModel.findByPk(id);
        if (!productOption) {
            return res.status(404).send({
                message: `❌ Opção de Produto ID: ${id} não encontrada.`
            });
        }

        await ProductOptionModel.update(
            {
                title,
                value
            },
            { where: { id: id } }
        );
        return res.status(200).send({
            message: `🟢 Opção de Produto ID: ${id} atualizada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao atualizar a opção de produto. Erro: ${error.message}`
        });
    }
};

const deleteProductOptionById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const productOption = await ProductOptionModel.findByPk(id);
        if (!productOption) {
            return res.status(404).send({
                message: `❌ Opção de Produto ID: ${id} não encontrada.`
            });
        }

        await ProductOptionModel.destroy({ where: { id: id } });
        return res.status(200).send({
            message: `🟢 Opção de Produto ID: ${id} deletada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar a opção de produto. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewProductOption,
    getAllProductOptions,
    updateProductOptionById,
    deleteProductOptionById
};