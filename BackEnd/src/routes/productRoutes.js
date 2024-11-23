const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productMiddlewares = require('../middlewares/productMiddlewares');

// Rotas de produtos
router.get('/listar-produto', productController.getAllProducts);
router.post('/criar-produto', productMiddlewares.middlewareCreateNewProduct, productController.createNewProduct);
router.put('/atualizar-produto/:id', productMiddlewares.middlewareUpdateProductById, productController.updateProductById);
router.delete('/deletar-produto/:id', productMiddlewares.middlewareDeleteProductById, productController.deleteProductById);

module.exports = router;