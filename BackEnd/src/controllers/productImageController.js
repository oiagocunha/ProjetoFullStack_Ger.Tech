const ProductImageModel = require('../models/productImageModel');

const createNewProductImage = async (req, res) => {
    const { product_id, path } = req.body;

    try {
        const newProductImage = await ProductImageModel.create({
            product_id,
            path
        });

        return res.status(201).send({
            message: `🟢 Imagem de Produto ID: ${newProductImage.id} criada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao criar a imagem de produto. Erro: ${error.message}`
        });
    }
};

const getAllProductImages = async (req, res) => {
    try {
        const productImages = await ProductImageModel.findAll();
        return res.send(productImages);
    } catch (error) {
        return res.status(500).send({
            message: `❌ Erro ao listar as imagens de produto! Erro: ${error.message}`
        });
    }
};

const updateProductImageById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { path } = req.body;

    try {
        const productImage = await ProductImageModel.findByPk(id);
        if (!productImage) {
            return res.status(404).send({
                message: `❌ Imagem de Produto ID: ${id} não encontrada.`
            });
        }

        await ProductImageModel.update(
            {
                path
            },
            { where: { id: id } }
        );
        return res.status(200).send({
            message: `🟢 Imagem de Produto ID: ${id} atualizada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao atualizar a imagem de produto. Erro: ${error.message}`
        });
    }
};

const deleteProductImageById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const productImage = await ProductImageModel.findByPk(id);
        if (!productImage) {
            return res.status(404).send({
                message: `❌ Imagem de Produto ID: ${id} não encontrada.`
            });
        }

        await ProductImageModel.destroy({ where: { id: id } });
        return res.status(200).send({
            message: `🟢 Imagem de Produto ID: ${id} deletada com sucesso!`
        });
    } catch (error) {
        return res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar a imagem de produto. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewProductImage,
    getAllProductImages,
    updateProductImageById,
    deleteProductImageById
};