// IMPORTANDO  O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()

// CRIANDO ROTA HOME
app.get('/', (req, res) => {
  res.send('Bem vindo(a) à API!')
})

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando no link http://localhost:${PORT}`)
})