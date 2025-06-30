# 🛍️ E-commerce Full Stack - Ger.Tech

Um projeto completo de e-commerce desenvolvido com tecnologias modernas, oferecendo uma plataforma robusta para vendas online de produtos diversos, com foco em sneakers e artigos esportivos.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Funcionalidades](#funcionalidades)
- [Instalação e Configuração](#instalação-e-configuração)
- [API Endpoints](#api-endpoints)
- [Estrutura de Banco de Dados](#estrutura-de-banco-de-dados)
- [Frontend](#frontend)
- [Testes](#testes)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

Este é um projeto de e-commerce full stack que oferece uma experiência completa de compras online. O sistema é dividido em duas principais aplicações:

- **Backend**: API RESTful robusta construída com Node.js e Express
- **Frontend**: Interface moderna e responsiva desenvolvida com React

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação e autorização
- **bcrypt** - Hash de senhas
- **Jest** - Framework de testes
- **Nodemon** - Desenvolvimento com auto-reload

### Frontend
- **React 18** - Biblioteca para interfaces
- **React Router DOM** - Roteamento
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes Bootstrap para React
- **React Icons** - Biblioteca de ícones
- **Vite** - Build tool e bundler

## 🏗️ Arquitetura do Sistema

### Backend Structure

```
BackEnd/
├── src/
│   ├── app.js                 # Configuração principal da aplicação
│   ├── server.js              # Servidor HTTP
│   ├── config/
│   │   ├── dotenvConfig.js    # Configurações de ambiente
│   │   └── database/
│   │       ├── connection.js   # Conexão com banco de dados
│   │       └── sync.js        # Sincronização do banco
│   ├── controllers/           # Lógica de negócio
│   │   ├── authControllers.js # Autenticação
│   │   ├── usersController.js # Gerenciamento de usuários
│   │   ├── productController.js # Produtos
│   │   ├── categoryController.js # Categorias
│   │   ├── productImageController.js # Imagens de produtos
│   │   ├── productOptionController.js # Opções de produtos
│   │   └── sneakersControllers.js # Sneakers específicos
│   ├── middlewares/           # Middlewares de validação
│   │   ├── usersMiddlewares.js
│   │   ├── productMiddlewares.js
│   │   ├── categoryMiddlewares.js
│   │   ├── productImageMiddlewares.js
│   │   └── productOptionMiddlewares.js
│   ├── models/                # Modelos de dados (Sequelize)
│   │   ├── usersModel.js
│   │   ├── productModel.js
│   │   ├── categoryModel.js
│   │   ├── productCategoryModel.js
│   │   ├── productImageModel.js
│   │   └── productOptionModel.js
│   └── routes/                # Definição de rotas
│       ├── index.js
│       ├── authRoutes.js
│       ├── usersRoutes.js
│       ├── productRoutes.js
│       ├── categoryRoutes.js
│       ├── productImageRoutes.js
│       └── productOptionRoutes.js
└── package.json
```

### Frontend Structure

```
FrontEnd/
├── src/
│   ├── assets/                # Recursos estáticos
│   │   ├── Images/           # Imagens do projeto
│   │   └── react.svg
│   ├── Components/           # Componentes reutilizáveis
│   │   ├── Header/          # Cabeçalho
│   │   ├── Footer/          # Rodapé
│   │   ├── Carousel/        # Carrossel de imagens
│   │   ├── ProductListing/  # Listagem de produtos
│   │   ├── barraDePesquisa/ # Barra de busca
│   │   ├── carrinhoDeCompras/ # Carrinho de compras
│   │   ├── Categorias/      # Componentes de categoria
│   │   ├── Coleções/        # Coleções de produtos
│   │   ├── Filter/          # Filtros de produtos
│   │   ├── Logo/            # Componente do logo
│   │   └── OrderBox/        # Caixa de pedidos
│   └── pages/               # Páginas da aplicação
│       ├── HomePage/        # Página inicial
│       ├── ProductFilterPage/ # Página de filtros
│       └── ProductViewPage/ # Visualização de produto
├── App.jsx                  # Componente principal
├── main.jsx                 # Ponto de entrada
└── package.json
```

## ✨ Funcionalidades

### Sistema de Autenticação
- ✅ Registro de usuários com validação
- ✅ Login com JWT
- ✅ Hash de senhas com bcrypt
- ✅ Validação de email e senha forte

### Gerenciamento de Usuários
- ✅ CRUD completo de usuários
- ✅ Validação de dados
- ✅ Middleware de proteção

### Sistema de Produtos
- ✅ CRUD de produtos
- ✅ Gerenciamento de categorias
- ✅ Upload e gerenciamento de imagens
- ✅ Opções de produtos (tamanhos, cores, etc.)
- ✅ Controle de estoque

### Frontend
- ✅ Interface responsiva
- ✅ Carrossel de produtos em destaque
- ✅ Sistema de navegação com React Router
- ✅ Componentes modulares e reutilizáveis
- ✅ Integração com Bootstrap

### Funcionalidades Planejadas/Em Desenvolvimento
- 🔄 Carrinho de compras funcional
- 🔄 Sistema de pagamento
- 🔄 Área administrativa
- 🔄 Sistema de avaliações
- 🔄 Wishlist

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- PostgreSQL
- Git

### Backend

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd ProjetoFullStack_Ger.Tech/BackEnd
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do backend:
```env
PORT=3000
JWT_SECRET=sua_chave_secreta_aqui
DB_HOST=localhost
DB_PORT=5432
DB_NAME=seu_banco_de_dados
DB_USER=seu_usuario
DB_PASS=sua_senha
```

4. **Configure o banco de dados**
```bash
npm run db
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

### Frontend

1. **Navegue para o diretório do frontend**
```bash
cd ../FrontEnd
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

## 📡 API Endpoints

### Autenticação
```
POST /auth/login - Realizar login
```

### Usuários
```
GET    /users/listar-usuarios     - Listar todos os usuários
POST   /users/criar-usuario       - Criar novo usuário
PUT    /users/atualizar-usuario/:id - Atualizar usuário
DELETE /users/deletar-usuario/:id  - Deletar usuário
```

### Categorias
```
GET    /categories/listar-categorias      - Listar categorias
POST   /categories/criar-categoria        - Criar categoria
PUT    /categories/atualizar-categoria/:id - Atualizar categoria
DELETE /categories/deletar-categoria/:id  - Deletar categoria
```

### Produtos
```
GET    /products/listar-produtos      - Listar produtos
POST   /products/criar-produto        - Criar produto
PUT    /products/atualizar-produto/:id - Atualizar produto
DELETE /products/deletar-produto/:id  - Deletar produto
```

### Opções de Produtos
```
GET    /product-options/listar-opcoes-produto      - Listar opções
POST   /product-options/criar-opcao-produto        - Criar opção
PUT    /product-options/atualizar-opcao-produto/:id - Atualizar opção
DELETE /product-options/deletar-opcao-produto/:id  - Deletar opção
```

### Imagens de Produtos
```
GET    /product-images/listar-imagens-produto      - Listar imagens
POST   /product-images/criar-imagem-produto        - Criar imagem
PUT    /product-images/atualizar-imagem-produto/:id - Atualizar imagem
DELETE /product-images/deletar-imagem-produto/:id  - Deletar imagem
```

## 🗄️ Estrutura de Banco de Dados

### Tabelas Principais

**users**
- id (PK)
- firstname
- surname
- email (unique)
- password (hashed)

**products**
- id (PK)
- enabled
- name
- slug
- use_in_menu
- stock
- description
- price

**categories**
- id (PK)
- name
- slug

**product_images**
- id (PK)
- product_id (FK)
- enabled
- path

**product_options**
- id (PK)
- product_id (FK)
- title
- shape
- radius
- type
- values

## 🎨 Frontend

O frontend é desenvolvido com React e oferece:

### Páginas
- **HomePage**: Página inicial com carrossel, produtos em destaque e coleções
- **ProductFilterPage**: Página de filtros e busca de produtos
- **ProductViewPage**: Visualização detalhada do produto

### Componentes
- **Header**: Navegação principal com logo e menu
- **Footer**: Rodapé com informações da empresa
- **Carousel**: Carrossel de imagens promocionais
- **ProductListing**: Listagem de produtos com paginação
- **Filter**: Sistema de filtros por categoria, preço, etc.
- **Categorias**: Navegação por categorias
- **carrinhoDeCompras**: Componentes do carrinho de compras

### Styling
- Bootstrap 5 para responsividade
- Módulos CSS customizados
- Design moderno e limpo

## 🧪 Testes

O projeto utiliza Jest para testes automatizados.

```bash
# Executar testes
npm test

# Executar testes com coverage
npm run test
```

## 🛠️ Scripts Disponíveis

### Backend
```bash
npm run dev    # Servidor de desenvolvimento
npm run db     # Sincronizar banco de dados
npm test       # Executar testes
```

### Frontend
```bash
npm run dev     # Servidor de desenvolvimento
npm run build   # Build para produção
npm run preview # Preview da build
npm run lint    # Verificar código
```

## 🔒 Segurança

- ✅ Senhas hasheadas com bcrypt
- ✅ Autenticação JWT
- ✅ Validação rigorosa de dados
- ✅ Middlewares de proteção
- ✅ Sanitização de inputs

## 📈 Roadmap

### Próximas Funcionalidades
- [ ] Sistema de pagamento integrado
- [ ] Área administrativa completa
- [ ] Sistema de notificações
- [ ] Chat de suporte ao cliente
- [ ] Sistema de cupons e promoções
- [ ] Integração com redes sociais
- [ ] Sistema de reviews e avaliações
- [ ] Wishlist personalizada
- [ ] Recomendações inteligentes

### Melhorias Técnicas
- [ ] Implementação de cache (Redis)
- [ ] Containerização com Docker
- [ ] CI/CD pipeline
- [ ] Monitoring e logs
- [ ] Otimização de performance
- [ ] PWA (Progressive Web App)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

Desenvolvido por **Ger.Tech Team**

---

**🛍️ Transformando a experiência de compras online!**

Para mais informações, entre em contato ou abra uma issue no repositório.
