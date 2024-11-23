const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const categoryMiddlewares = require('../middlewares/categoryMiddlewares');

// Rotas de categorias
router.get('/listar-categorias', categoryController.getAllCategories);
router.post('/criar-categoria', categoryMiddlewares.middlewareCreateNewCategory, categoryController.createNewCategory);
router.put('/atualizar-categoria/:id', categoryMiddlewares.middlewareUpdateCategoryById, categoryController.updateCategoryById);
router.delete('/deletar-categoria/:id', categoryMiddlewares.middlewareDeleteCategoryById, categoryController.deleteCategoryById);

module.exports = router;