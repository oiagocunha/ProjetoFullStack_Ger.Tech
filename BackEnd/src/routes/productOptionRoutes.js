const express = require('express');
const router = express.Router();
const productOptionController = require('../controllers/productOptionController');
const productOptionMiddlewares = require('../middlewares/productOptionMiddlewares');

// Rotas de opções de produtos
router.get('/listar-opcoes-produto', productOptionController.getAllProductOptions);
router.post('/criar-opcao-produto', productOptionMiddlewares.middlewareCreateNewProductOption, productOptionController.createNewProductOption);
router.put('/atualizar-opcao-produto/:id', productOptionMiddlewares.middlewareUpdateProductOptionById, productOptionController.updateProductOptionById);
router.delete('/deletar-opcao-produto/:id', productOptionMiddlewares.middlewareDeleteProductOptionById, productOptionController.deleteProductOptionById);

module.exports = router;