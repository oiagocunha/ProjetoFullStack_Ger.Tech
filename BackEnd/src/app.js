// IMPORTANDO  O EXPRESS
const express = require('express');
// APP RECEBE O EXPRESS
const app = express();
// APP RECEBE MIDDLEWARE PARA INTERPRETAR JSON
app.use(express.json())
const authRoutes = require('./routes/authRoutes')
const usersRoutes = require('./routes/usersRoutes')

app.use(authRoutes)
app.use(usersRoutes)


module.exports = app;