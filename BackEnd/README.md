# Backend do Projeto FullStack Ger.Tech

Este é o backend para a aplicação Ger.Tech, uma plataforma de e-commerce. Ele é responsável por gerenciar produtos, categorias, usuários, autenticação e outras funcionalidades do lado do servidor.

## Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução JavaScript no servidor.
*   **Express.js**: Framework para construir a API REST.
*   **Sequelize**: ORM (Object-Relational Mapper) para interagir com o banco de dados PostgreSQL.
*   **PostgreSQL**: Banco de dados relacional.
*   **JSON Web Tokens (JWT)**: Para autenticação e autorização baseada em token.
*   **Bcrypt**: Para hash de senhas.
*   **Nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.
*   **Jest & Supertest**: Para testes unitários e de integração.
*   **Dotenv**: Para gerenciar variáveis de ambiente.

## Estrutura de Pastas

A estrutura de pastas do projeto está organizada da seguinte forma:

```
BackEnd/
├── src/
│   ├── config/
│   │   ├── database/
│   │   │   ├── connection.js  // Configuração da conexão com o banco de dados
│   │   │   └── sync.js        // Sincronização dos models com o banco
│   │   └── dotenvConfig.js    // Carregamento das variáveis de ambiente
│   ├── controllers/           // Lógica de negócio e controle das requisições
│   ├── middlewares/           // Funções intermediárias para as rotas
│   ├── models/                // Definição dos modelos do Sequelize
│   └── routes/                // Definição das rotas da API
│   ├── app.js                 // Configuração principal do Express
│   └── server.js              // Ponto de entrada para iniciar o servidor
├── package.json               // Dependências e scripts do projeto
└── README.md                  // Este arquivo
```

## Pré-requisitos

*   Node.js (versão 14 ou superior)
*   NPM ou Yarn
*   Um servidor de banco de dados PostgreSQL em execução

## Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    cd ProjetoFullStack_Ger.Tech/BackEnd
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz da pasta `BackEnd` e adicione as seguintes variáveis, substituindo pelos seus valores:
    ```env
    DB_HOST=localhost
    DB_USER=seu_usuario_do_banco
    DB_PASS=sua_senha_do_banco
    DB_NAME=seu_nome_do_banco
    DB_PORT=5432
    JWT_SECRET=seu_segredo_jwt_super_secreto
    PORT=3001
    ```

4.  **Sincronize o banco de dados:**
    Este comando irá criar as tabelas no seu banco de dados com base nos modelos definidos.
    ```bash
    npm run db
    ```

## Scripts Disponíveis

*   **`npm run dev`**: Inicia o servidor em modo de desenvolvimento com o Nodemon, que reinicia o servidor a cada alteração nos arquivos.
*   **`npm run test`**: Executa os testes automatizados com o Jest e gera um relatório de cobertura de código.
*   **`npm run db`**: Executa o script de sincronização para criar as tabelas no banco de dados.

## Endpoints da API

A API possui rotas para gerenciar os seguintes recursos:

*   **Autenticação**: `/api/auth`
*   **Usuários**: `/api/users`
*   **Categorias**: `/api/categories`
*   **Produtos**: `/api/products`
*   **Imagens de Produtos**: `/api/products/:productId/images`
*   **Opções de Produtos**: `/api/products/:productId/options`

Consulte o arquivo de rotas em `src/routes/index.js` para ver todos os endpoints detalhados.
