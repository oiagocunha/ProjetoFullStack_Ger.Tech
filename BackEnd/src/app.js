const express = require('express');
const app = express();
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productOptionRoutes = require('./routes/productOptionRoutes');
const productImageRoutes = require('./routes/productImageRoutes');
const indexRoutes = require('./routes/index');

app.use('/auth', authRoutes);
app.use('/usuarios', usersRoutes);
app.use('/produtos', productRoutes);
app.use('/categorias', categoryRoutes);
app.use('/opcoes-produto', productOptionRoutes);
app.use('/imagens-produto', productImageRoutes);
app.use('/', indexRoutes);

module.exports = app;