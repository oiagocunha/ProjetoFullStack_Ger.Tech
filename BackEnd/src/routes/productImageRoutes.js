const express = require('express');
const router = express.Router();
const productImageController = require('../controllers/productImageController');
const productImageMiddlewares = require('../middlewares/productImageMiddlewares');

// Rotas de imagens de produtos
router.get('/listar-imagens-produto', productImageController.getAllProductImages);
router.post('/criar-imagem-produto', productImageMiddlewares.middlewareCreateNewProductImage, productImageController.createNewProductImage);
router.put('/atualizar-imagem-produto/:id', productImageMiddlewares.middlewareUpdateProductImageById, productImageController.updateProductImageById);
router.delete('/deletar-imagem-produto/:id', productImageMiddlewares.middlewareDeleteProductImageById, productImageController.deleteProductImageById);

module.exports = router;