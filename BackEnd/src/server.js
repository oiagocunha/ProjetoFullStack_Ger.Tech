const app = require('./app');
// ESTABELECENDO A PORTA QUE P SERVIDOR IRÁ SER EXECUTADO
const { port } = require('./config/dotenvConfig')

// ATIVANDO A EXECUÇÃO DO SERVIDOR NA PORTA 3000
app.listen(port, () => {
    console.log(`O servidor está rodando no link http://localhost:${port}`);
})