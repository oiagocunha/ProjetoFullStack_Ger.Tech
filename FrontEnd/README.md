# 🛍️ E-commerce Frontend - React

Interface moderna e responsiva para o e-commerce Ger.Tech, desenvolvida com React e tecnologias de ponta.

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Páginas](#páginas)
- [Roteamento](#roteamento)
- [Estilização](#estilização)
- [Configuração](#configuração)

## 🎯 Sobre

Frontend do e-commerce Ger.Tech construído com React 18 e Vite. Oferece uma experiência de usuário moderna com interface responsiva, navegação intuitiva e componentes reutilizáveis.

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento SPA
- **Bootstrap 5** - Framework CSS responsivo
- **React Bootstrap** - Componentes Bootstrap para React
- **React Icons** - Biblioteca de ícones
- **ESLint** - Linter para qualidade de código

## ⚙️ Instalação

1. **Navegue para o diretório do frontend**
```bash
cd FrontEnd
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 📜 Scripts Disponíveis

```bash
# Servidor de desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Verificação de código com ESLint
npm run lint
```

## 📁 Estrutura do Projeto

```
FrontEnd/
├── public/
│   └── vite.svg                    # Favicon
├── src/
│   ├── assets/                     # Recursos estáticos
│   │   ├── Images/                # Imagens do projeto
│   │   │   ├── home-slide-*.jpeg  # Slides do carrossel
│   │   │   ├── product-*.jpeg     # Imagens de produtos
│   │   │   ├── collection-*.png   # Imagens de coleções
│   │   │   ├── logo.png          # Logo da empresa
│   │   │   └── ...               # Outras imagens
│   │   └── react.svg             # Logo do React
│   ├── Components/               # Componentes reutilizáveis
│   │   ├── Header/              # Cabeçalho da aplicação
│   │   ├── Footer/              # Rodapé
│   │   ├── Carousel/            # Carrossel de imagens
│   │   ├── ProductListing/      # Listagem de produtos
│   │   ├── barraDePesquisa/     # Barra de busca
│   │   ├── carrinhoDeCompras/   # Carrinho de compras
│   │   ├── Categorias/          # Navegação por categorias
│   │   ├── Coleções/            # Exibição de coleções
│   │   ├── Filter/              # Filtros de produtos
│   │   ├── Logo/                # Componente do logo
│   │   └── OrderBox/            # Caixa de pedidos
│   └── pages/                   # Páginas da aplicação
│       ├── HomePage/            # Página inicial
│       ├── ProductFilterPage/   # Página de filtros
│       └── ProductViewPage/     # Visualização de produto
├── App.jsx                      # Componente raiz
├── App.css                      # Estilos globais
├── main.jsx                     # Ponto de entrada
├── index.css                    # Estilos base
├── index.html                   # Template HTML
├── vite.config.js              # Configuração do Vite
├── eslint.config.js            # Configuração do ESLint
└── package.json                # Dependências e scripts
```

## 🧩 Componentes

### Layout
- **Header**: Navegação principal com logo, menu e barra de pesquisa
- **Footer**: Rodapé com informações da empresa e links úteis
- **Logo**: Componente reutilizável do logo

### Produto
- **ProductListing**: Lista de produtos com paginação
- **ProductCard**: Card individual de produto
- **Filter**: Sistema de filtros por categoria, preço, etc.

### Navegação
- **Categorias**: Menu de categorias de produtos
- **barraDePesquisa**: Componente de busca
- **Carousel**: Carrossel de imagens promocionais

### E-commerce
- **carrinhoDeCompras**: Funcionalidades do carrinho
- **OrderBox**: Resumo de pedidos
- **Coleções**: Exibição de coleções de produtos

## 📄 Páginas

### HomePage (`/`)
- Carrossel de imagens promocionais
- Produtos em destaque
- Coleções populares
- Layout responsivo

### ProductFilterPage (`/product-filter`)
- Sistema de filtros avançados
- Listagem de produtos filtrados
- Paginação
- Ordenação

### ProductViewPage
- Visualização detalhada do produto
- Galeria de imagens
- Informações técnicas
- Botões de ação (comprar, favoritar)

## 🛣️ Roteamento

O roteamento é gerenciado pelo React Router DOM:

```jsx
<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product-filter" element={<FilterPage />} />
    {/* Outras rotas serão adicionadas */}
  </Routes>
</Router>
```

## 🎨 Estilização

### Framework CSS
- **Bootstrap 5**: Base responsiva e componentes
- **React Bootstrap**: Componentes Bootstrap nativos para React

### Arquitetura CSS
- **CSS Modules**: Para componentes específicos (ex: `barra.module.css`)
- **CSS Global**: Estilos base em `App.css` e `index.css`
- **Responsividade**: Mobile-first design

### Assets
- Imagens otimizadas na pasta `src/assets/Images/`
- Ícones via React Icons
- Logos e recursos gráficos organizados

## ⚡ Configuração

### Vite Config (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

### ESLint Config
Configuração moderna com:
- Regras para React e Hooks
- Detecção de código não utilizado
- Padronização de código

## 🔄 Integração com Backend

- API calls para `http://localhost:3000`
- Gerenciamento de estado para produtos e usuários
- Autenticação JWT (em desenvolvimento)

## 📱 Responsividade

- Design mobile-first
- Breakpoints do Bootstrap
- Componentes adaptativos
- Touch-friendly para dispositivos móveis

## 🔜 Próximas Funcionalidades

- [ ] Sistema de autenticação completo
- [ ] Carrinho de compras funcional
- [ ] Checkout e pagamento
- [ ] Área do usuário
- [ ] Wishlist
- [ ] Sistema de avaliações
- [ ] Chat de suporte
- [ ] PWA (Progressive Web App)

## 🛠️ Desenvolvimento

### Estrutura de Componentes
- Componentes funcionais com Hooks
- Props tipadas (migração para TypeScript planejada)
- Componentes reutilizáveis e modulares

### Boas Práticas
- Nomenclatura clara e consistente
- Separação de responsabilidades
- Código limpo e documentado
- Performance otimizada

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Arquivos gerados em /dist
# Pronto para deploy em qualquer servidor estático
```

---

**🎨 Interface moderna para uma experiência de compra excepcional!**
